"use client";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { chatSession } from "@/utils/GeminiAIModal";
import { UserAnswer } from "@/utils/schema";
import { Mic } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import useSpeechToText from "react-hook-speech-to-text";
import Webcam from "react-webcam";
import { toast } from "sonner";
import { useUser } from "@clerk/nextjs";

function RecordAnswerSection({
  mockInterviewQuestion,
  activeQuestionIndex,
  interviewData,
}) {
  const [userAnswer, setUserAnswer] = useState(""); // To store the recognized speech
  const [loading, setLoading] = useState(false); // Initialized with false
  const { user } = useUser();
  const {
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
      SaveUserAnswer();
    }
  }, [userAnswer]);

  const SaveUserAnswer = async () => {
    if (isRecording) {
      setLoading(true);
      stopSpeechToText();
      if (userAnswer?.length < 10) {
        setLoading(false);
        toast("Error while saving you answer, Please record again..");
        return;
      }

      const feedbackPrompt =
        "Question: " +
        mockInterviewQuestion[activeQuestionIndex]?.question +
        ", User Answer: " +
        userAnswer +
        ", Depend on question and user answer for given interview question" +
        " please give us ratingand feedback as a area of improvement if any." +
        " in just 3 to 5 linesto improve it in JSON format with rating field and feedback field";

      const result = await chatSession.sendMessage(feedbackPrompt);

      const mockJsonResp = (await result.response.text())
        .replace("```json", "")
        .replace("```", "");

      console.log(mockJsonResp);

      const JsonFeedbackResp = JSON.parse(mockJsonResp);

      const resp = await db.insert(UserAnswer).values({
        mockIdRef: interviewData?.mockId,
        question: mockInterviewQuestion[activeQuestionIndex]?.question || "",
        correctAns: mockInterviewQuestion[activeQuestionIndex]?.answer || "",
        userAns: userAnswer || "",
        feedback: JsonFeedbackResp?.feedback || "",
        rating: JsonFeedbackResp?.rating || "",
        userEmail: user?.primaryEmailAddress?.emailAddress || "",
        createdAt: moment().format("YYYY-MM-DD"),
      });

      if (resp) {
        toast.success("User Answer Recorded successfully");
        setUserAnswer("");
        setResults([]);
      } else {
        toast.error("Failed to record user answer.");
      }
      setResults([]);

      setLoading(false);
    } else {
      startSpeechToText();
    }
  };

  return (
    <div className="flex items-center justify-center flex-col">
      {/* Webcam Section */}
      <div className="flex flex-col mt-20 justify-center items-center bg-secondary rounded-lg p-5">
        <Image
          src={"/webcam.png"}
          width={200}
          height={200}
          alt="Webcam"
          className="absolute"
        />
        <Webcam
          mirrored={true}
          style={{
            width: "100%",
            height: 300,
            zIndex: 10,
          }}
        />
      </div>

      {/* Button to Start/Stop Recording */}
      <Button
        disabled={loading}
        variant="outline"
        className="my-10"
        onClick={SaveUserAnswer}
      >
        {isRecording ? (
          <h2 className="flex items-center gap-2 text-red-600">
            <Mic /> Recording...
          </h2>
        ) : (
          "Record Answer"
        )}
      </Button>

      {/* Button to Show User Answer */}
    </div>
  );
}

export default RecordAnswerSection;
