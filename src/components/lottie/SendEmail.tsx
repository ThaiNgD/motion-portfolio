"use client";
import animateData from "@/data/sending-mail.json";
import Lottie from "lottie-react";

const SendEmail = () => {
  return (
    <Lottie
      className="z-50 absolute right-[calc(50%-200px)] bottom-[400px] !w-[400px] !h-[400px]"
      loop={true}
      autoPlay={true}
      animationData={animateData}
      rendererSettings={{
        preserveAspectRatio: "xMidYMid slice",
      }}
    />
  );
};

export default SendEmail;
