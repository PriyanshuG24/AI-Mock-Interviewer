"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"; // Correct import for useRouter

export default function Home() {
  const router = useRouter(); // Initialize useRouter

  const handleButtonClick = () => {
    router.push("/dashboard"); // Navigate to /dashboard
  };

  return (
    <div>
      <h2>Sub</h2>
      <Button onClick={handleButtonClick}>
        Click the button to navigate to the dashboard
      </Button>
    </div>
  );
}
