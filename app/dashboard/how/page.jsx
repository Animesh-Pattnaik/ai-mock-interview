import React from "react";
import { User, Video, Mic, Play, Check, Edit, ArrowLeft, ArrowRight } from 'lucide-react';

const HowItWorks = () => {
  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h2 className="font-bold text-3xl text-gray-800 mb-6">How It Works</h2>
      <p className="text-gray-600 text-lg mb-10">Follow these steps to successfully complete your AI Mock Interview.</p>
      
      <div className="space-y-6">
        <div className="flex items-start p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <User className="text-blue-500 w-8 h-8 mr-4" />
          <div>
            <h3 className="font-semibold text-xl text-gray-800 mb-2">1. Create a New Interview</h3>
            <p className="text-gray-700">
              Click the <strong>"New Interview"</strong> button. Fill out details like your role, tech stack, and work experience.
            </p>
          </div>
        </div>

        <div className="flex items-start p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <Video className="text-green-500 w-8 h-8 mr-4" />
          <div>
            <h3 className="font-semibold text-xl text-gray-800 mb-2">2. Audio and Video Permissions</h3>
            <p className="text-gray-700">
              Grant permission for audio and video to enable the interview simulation. This helps in analyzing both your verbal and non-verbal communication.
            </p>
          </div>
        </div>

        <div className="flex items-start p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <Play className="text-yellow-500 w-8 h-8 mr-4" />
          <div>
            <h3 className="font-semibold text-xl text-gray-800 mb-2">3. Start the Interview</h3>
            <p className="text-gray-700">
              Click <strong>"Start Interview"</strong>. Questions will appear on your screen. Use the <strong>volume button</strong> to hear the questions.
            </p>
          </div>
        </div>

        <div className="flex items-start p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <Mic className="text-red-500 w-8 h-8 mr-4" />
          <div>
            <h3 className="font-semibold text-xl text-gray-800 mb-2">4. Answer the Questions</h3>
            <p className="text-gray-700">
              Choose between typing or recording your answer:
            </p>
            <div className="ml-6 mt-2">
              <ul className="list-disc text-gray-700">
                <li><strong>Type your answer</strong> and click <strong>"Submit Answer"</strong>.</li>
                <li><strong>Record your answer</strong> and click <strong>"Stop Recording"</strong> when finished.</li>
              </ul>
              <p className="mt-2 text-gray-700">
                Use <ArrowLeft className="inline w-4 h-4" /> and <ArrowRight className="inline w-4 h-4" /> to navigate between questions.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-start p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <Check className="text-purple-500 w-8 h-8 mr-4" />
          <div>
            <h3 className="font-semibold text-xl text-gray-800 mb-2">5. End the Interview & Get Feedback</h3>
            <p className="text-gray-700">
              Click <strong>"End Interview"</strong> to receive detailed feedback on each question.
            </p>
          </div>
        </div>

        <div className="flex items-start p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <Edit className="text-teal-500 w-8 h-8 mr-4" />
          <div>
            <h3 className="font-semibold text-xl text-gray-800 mb-2">6. Review or Retake</h3>
            <p className="text-gray-700">
              On the home page, choose to <strong>"Retake the Interview"</strong> or <strong>"View Feedback"</strong> to analyze your performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
