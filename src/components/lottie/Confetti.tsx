"use client";
import animateData from "@/data/confetti.json";
import Lottie from "lottie-react";
const Confetti = ({ copied }: { copied: boolean }) => {
  return (
    <Lottie
      className="z-50 !w-[200px] translate-y-[75px] !h-[200px]"
      loop={copied}
      autoPlay={copied}
      animationData={animateData}
      rendererSettings={{
        preserveAspectRatio: "xMidYMid slice",
      }}
    />
  );
};

export default Confetti;
