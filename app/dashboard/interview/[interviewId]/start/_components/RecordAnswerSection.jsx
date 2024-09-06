"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";
import useSpeechToText from "react-hook-speech-to-text";
import { Mic, StopCircle, Edit } from "lucide-react";
import { toast } from "sonner";
import { chatSession } from "@/utils/GeminiAiModel";
import { db } from "@/utils/db";
import { UserAnswer } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { Textarea } from "@/components/ui/textarea"; // Assuming you have a styled Textarea component

const RecordAnswerSection = ({
  mockInterviewQuestion,
  activeQuestionIndex,
  interviewData,
}) => {
  const [userAnswer, setUserAnswer] = useState("");
  const [writtenAnswer, setWrittenAnswer] = useState("");
  const [isRecordingMode, setIsRecordingMode] = useState(true); // Initial state for recording mode
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
    setResults,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  useEffect(() => {
    results.map((result) =>
      setUserAnswer((prevAns) => prevAns + result?.transcript)
    );
  }, [results]);

  useEffect(() => {
    if (!isRecording && userAnswer.length > 10) {
      UpdateUserAnswer();
    }
  }, [userAnswer]);

  const StartStopRecording = async () => {
    if (isRecording) {
      stopSpeechToText();
      if (userAnswer.length < 5) {
        setLoading(false);
        toast.error("Error while saving your answer, please record again");
        return;
      }
    } else {
      startSpeechToText();
    }
  };

  const UpdateUserAnswer = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const finalAnswer = userAnswer || writtenAnswer;
      if (finalAnswer.length < 5) {
        toast.error("Answer is too short, please provide more detail.");
        setLoading(false);
        return;
      }

      const feedbackPrompt = 
        `Question: ${mockInterviewQuestion[activeQuestionIndex]?.question}, 
         User Answer: ${finalAnswer}, 
         Depends on question and user answer for given interview question 
         please give use rating for answer and feedback as area of improvement if any 
         in just 3 to 5 lines to improve it in JSON format with rating field and feedback field.`;

      const result = await chatSession.sendMessage(feedbackPrompt);
      const mockJsonResp = result.response
        .text()
        .replace("```json", "")
        .replace("```", "");

      const JsonfeedbackResp = JSON.parse(mockJsonResp);

      const resp = await db.insert(UserAnswer).values({
        mockIdRef: interviewData?.mockId,
        question: mockInterviewQuestion[activeQuestionIndex]?.question,
        correctAns: mockInterviewQuestion[activeQuestionIndex]?.answer,
        userAns: finalAnswer,
        feedback: JsonfeedbackResp?.feedback,
        rating: JsonfeedbackResp?.rating,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        createdAt: moment().format("DD-MM-YYYY"),
      });

      if (resp) {
        toast.success("User Answer recorded successfully");
        setUserAnswer("");
        setWrittenAnswer("");
        setResults([]);
      }
    } catch (error) {
      console.error("Failed to update user answer:", error);
      toast.error("An error occurred while saving your answer. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;

  return (
    <div className="flex justify-center items-center flex-col">
      <div className="relative flex flex-col my-10 justify-center items-center bg-black rounded-lg p-5">
        <Image
          src={"/webcam.png"}
          width={200}
          height={200}
          className="absolute"
          alt="webcam"
          priority
        />
        <Webcam
          style={{ height: 300, width: "100%", zIndex: 10 }}
          mirrored={true}
        />
      </div>

      {/* Mode Toggle Button */}
      <Button
        onClick={() => setIsRecordingMode((prev) => !prev)}
        variant="outline"
        className="my-1"
      >
        {isRecordingMode ? (
          <span className="flex items-center gap-2">
            <Edit /> Switch to TextArea
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <Mic /> Switch to Recording
          </span>
        )}
      </Button>

      {/* Conditionally render buttons and input based on mode */}
      {isRecordingMode ? (
        <Button
          disabled={loading}
          variant="outline"
          className="my-2"
          onClick={StartStopRecording}
        >
          {isRecording ? (
            <h2 className="text-red-600 items-center animate-pulse flex gap-2">
              <StopCircle /> Stop Recording...
            </h2>
          ) : (
            <h2 className="text-primary flex gap-2 items-center">
              <Mic /> Record Answer
            </h2>
          )}
        </Button>
      ) : (
        <div className="flex flex-col items-center w-full">
          <Textarea
            value={writtenAnswer}
            onChange={(e) => setWrittenAnswer(e.target.value)}
            placeholder="Type your answer here..."
            className="my-2 w-full"
          />
          <Button
            disabled={loading}
            variant="outline"
            className="my-2"
            onClick={UpdateUserAnswer}
          >
            Submit Answer
          </Button>
        </div>
      )}
    </div>
  );
};

export default RecordAnswerSection;
