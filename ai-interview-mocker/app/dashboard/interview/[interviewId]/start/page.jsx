"use client";
import { db } from "@/utils/db";
import { MockInterview } from "@/utils/schema";
import { eq } from "drizzle-orm";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic"; // Import dynamic

import QuestionsSection from "./_components/QuestionsSection";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Dynamically import RecordAnswerSection with SSR disabled
const RecordAnswerSection = dynamic(
  () => import("./_components/RecordAnswerSection"),
  {
    ssr: false,
  }
);

function StartInterview({ params }) {
  const [interviewData, setInterviewData] = useState(null); // Initial state as null
  const [mockInterviewQuestion, setMockInterviewQuestion] = useState([]);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    GetInterviewDetails();
  }, [params.interviewId]); // Add interviewId as a dependency

  const GetInterviewDetails = () => {
    db.select()
      .from(MockInterview)
      .where(eq(MockInterview.mockId, params.interviewId))
      .then((result) => {
        if (result.length > 0) {
          const jsonMockResp = JSON.parse(result[0].jsonMockResp); // Ensure result exists
          console.log(jsonMockResp);

          setMockInterviewQuestion(jsonMockResp);
          setInterviewData(result[0]);
        } else {
          console.error("No interview data found");
        }
      })
      .finally(() => {
        setLoading(false); // Stop loading once the request completes
      });
  };

  // Return loading UI if data is still being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Questions */}
        {mockInterviewQuestion && (
          <QuestionsSection
            mockInterviewQuestion={mockInterviewQuestion}
            activeQuestionIndex={activeQuestionIndex}
          />
        )}

        {/* Video and Audio record */}
        <RecordAnswerSection
          mockInterviewQuestion={mockInterviewQuestion}
          activeQuestionIndex={activeQuestionIndex}
          interviewData={interviewData}
        />
      </div>
      <div className="flex justify-end gap-6">
        {activeQuestionIndex > 0 && (
          <Button
            onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}
          >
            Previous Question
          </Button>
        )}
        {activeQuestionIndex != mockInterviewQuestion?.length - 1 && (
          <Button
            onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}
          >
            Next Question
          </Button>
        )}
        {activeQuestionIndex == mockInterviewQuestion?.length - 1 && (
          <Link
            href={"/dashboard/interview/" + interviewData?.mockId + "/feedback"}
          >
            {" "}
            <Button>End Interview</Button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default StartInterview;
