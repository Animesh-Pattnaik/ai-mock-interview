"use client";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import { desc, eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import InterviewItemCard from "./InterviewItemCard";

const InterviewList = () => {
  const { user } = useUser();
  const [InterviewList, setInterviewList] = useState([]);

  useEffect(() => {
    user && GetInterviewList();
  }, [user]);

  const GetInterviewList = async () => {
    const result = await db
      .select()
      .from(MockInterview)
      .where(eq(MockInterview.createdBy, user?.primaryEmailAddress?.emailAddress))
      .orderBy(desc(MockInterview.id));

    setInterviewList(result);
  };

  const DeleteInterview = async (mockId) => {
    try {
      console.log("Attempting to delete interview with ID:", mockId);
      
      // Perform the delete operation
      const result = await db
        .delete(MockInterview)
        .where(eq(MockInterview.mockId, mockId));
  
      console.log("Delete result:", result);
  
      // Check if deletion was successful and update state
      if (result) {
        setInterviewList((prevList) =>
          prevList.filter((interview) => interview.mockId !== mockId)
        );
        console.log("Interview deleted successfully");
      } else {
        console.error("Failed to delete interview. No result returned.");
      }
    } catch (error) {
      console.error("Error deleting interview:", error);
    }
  };
  
  return (
    <div>
      <h2 className="font-medium text-xl">Previous Mock Interviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-3">
        {InterviewList && InterviewList.map((interview, index) => (
          <InterviewItemCard
            key={index}
            interview={interview}
            onDelete={DeleteInterview} // Pass the delete function to InterviewItemCard
          />
        ))}
      </div>
    </div>
  );
};

export default InterviewList;
