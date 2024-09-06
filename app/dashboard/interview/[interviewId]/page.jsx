"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { Lightbulb, WebcamIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Webcam from "react-webcam";

function Interview({ params }) {
  const [interviewData, setInterviewData] = useState(null);
  const [webCamEnabled, setWebCamEnabled] = useState(false);

  // Load interview details once component mounts
  useEffect(() => {
    GetInterviewDetails();
  }, []);

  // Fetch interview details from database
  const GetInterviewDetails = async () => {
    try {
      const result = await db
        .select()
        .from(MockInterview)
        .where(eq(MockInterview.mockId, params.interviewId));
      setInterviewData(result[0]);
    } catch (error) {
      console.error("Error fetching interview details:", error);
    }
  };

  return (
    <div className="my-10">
      <h2 className="font-bold text-2xl">Let's get started</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex flex-col my-5 gap-5">
          {/* Display interview data */}
          {interviewData && (
            <div className="flex flex-col p-5 rounded-lg border gap-5">
              <h2 className="text-lg">
                <strong>Job Role/Job Position: </strong>
                {interviewData.jobPosition}
              </h2>
              <h2 className="text-lg">
                <strong>Job Description/Tech Stack: </strong>
                {interviewData.jobDesc}
              </h2>
              <h2 className="text-lg">
                <strong>Years of Experience: </strong>
                {interviewData.jobExperience}
              </h2>
            </div>
          )}
          {/* Information box */}
          <div className="p-5 border rounded-lg border-yellow-300 bg-yellow-100">
            <h2 className="flex gap-2 items-center text-yellow-500">
              <Lightbulb />
              <span>Information</span>
            </h2>
            <h2 className="mt-3 text-yellow-500">
              {process.env.NEXT_PUBLIC_INFORMATION}
            </h2>
          </div>
        </div>

        {/* Webcam section */}
        <div className="flex flex-col items-center">
          {webCamEnabled ? (
            <div className="h-72 w-full flex justify-center items-center">
              <Webcam
                onUserMedia={() => console.log("Webcam enabled")}
                onUserMediaError={() => console.log("Webcam error")}
                mirrored={true}
                style={{ height: "100%", width: "100%" }}
                videoConstraints={{
                  width: 300,
                  height: 300,
                }}
              />
            </div>
          ) : (
            <>
              <WebcamIcon className="h-72 my-7 border rounded-lg w-full p-20 bg-secondary" />
              <Button
                className="w-full border border-primary text-primary hover:bg-primary hover:text-white"
                variant="ghost"
                onClick={() => setWebCamEnabled(true)}
              >
                Enable Webcam and Microphone
              </Button>
            </>
          )}

          {/* Start interview button, centered and below the enable button */}
          <div className="mt-4">
            <Link href={`/dashboard/interview/${params.interviewId}/start`}>
              <Button className="mx-auto">Start Interview</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interview;
