import React from "react";
import { CreditCard, Star, Shield, CheckCircle } from 'lucide-react';

const UpgradePage = () => {
  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h2 className="font-bold text-3xl text-gray-800 mb-6">Upgrade Your Plan</h2>
      <p className="text-gray-600 text-lg mb-10">Choose the subscription plan that best suits your needs.</p>
      
      <div className="flex flex-col md:flex-row md:space-x-6">
        {/* Basic Plan */}
        <div className="flex-1 p-6 bg-white rounded-lg shadow-md border border-gray-200 mb-6 md:mb-0">
          <div className="flex items-center mb-4">
            <Star className="text-yellow-500 w-8 h-8 mr-4" />
            <h3 className="font-semibold text-xl text-gray-800">Basic Plan</h3>
          </div>
          <p className="text-gray-700 mb-4">
            Access to standard features, including mock interviews and basic feedback.
          </p>
          <p className="text-gray-900 font-bold text-2xl mb-6">$19.99 / month</p>
          <ul className="list-disc pl-5 mb-6">
            <li className="text-gray-700">Standard Mock Interviews</li>
            <li className="text-gray-700">Basic Feedback</li>
            <li className="text-gray-700">Email Support</li>
          </ul>
          <button className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
            Choose Basic Plan
          </button>
        </div>

        {/* Premium Plan */}
        <div className="flex-1 p-6 bg-white rounded-lg shadow-md border border-gray-200">
          <div className="flex items-center mb-4">
            <Shield className="text-green-500 w-8 h-8 mr-4" />
            <h3 className="font-semibold text-xl text-gray-800">Premium Plan</h3>
          </div>
          <p className="text-gray-700 mb-4">
            Enjoy all features including advanced feedback, priority support, and more.
          </p>
          <p className="text-gray-900 font-bold text-2xl mb-6">$49.99 / month</p>
          <ul className="list-disc pl-5 mb-6">
            <li className="text-gray-700">Advanced Mock Interviews</li>
            <li className="text-gray-700">Detailed Feedback</li>
            <li className="text-gray-700">Priority Support</li>
            <li className="text-gray-700">Exclusive Content</li>
          </ul>
          <button className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700">
            Choose Premium Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpgradePage;
