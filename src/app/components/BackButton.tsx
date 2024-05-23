"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

const BackButton = () => {
  const router = useRouter();

  return (
    <div>
      <Button className="btn" onClick={() => router.back()}>
        <ChevronLeft />
        BACK
      </Button>
    </div>
  );
};

export default BackButton;
