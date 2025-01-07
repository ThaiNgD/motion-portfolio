"use client";
import { tech_stack_data } from "@/data";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useState } from "react";
import { FaRegCopy } from "react-icons/fa6";
import Globe from "../Globe";
import { BackgroundGradientAnimation } from "./GradientBackGround";
import MagicButton from "./MagicButton";

const Confetti = dynamic(
  () => import("@/components/lottie/Confetti").then((m) => m.default),
  {
    ssr: false,
  }
);

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  id,
  spareImg,
  spareImgClassName,
  img,
  titleClassName,
  imgClassName,
}: GridItem & { id: number }) => {
  const [copied, setCopied] = useState(false);
  const handleCopyClick = () => {
    navigator.clipboard.writeText("dinhthai1905@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };
  return (
    <div
      className={cn(
        "relative  w-full row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 dark:bg-[linear-gradient(45deg,_rgb(149,_92,_255)_0%,_rgb(163,_94,_253)_19%,_rgb(173,_96,_251)_27%,_rgb(181,_93,_248)_34%,_rgb(194,_95,_247)_41%,_rgb(203,_98,_244)_47%,_rgb(214,_113,_244)_53%,_rgb(222,_136,_246)_59%,_rgb(232,_160,_248)_66%,_rgb(240,_184,_250)_73%,_rgb(247,_208,_251)_81%,_rgb(254,_230,_252)_100%)] bg-[linear-gradient(90deg,_rgba(114,244,238,1)_0%,_rgba(59,194,231,1)_100%)] overflow-hidden",
        className,
        id === 0 && "md:row-span-2 md:col-span-2"
      )}
    >
      <div className={`${id === 3 && "absolute flex justify-center"} h-full`}>
        {img && (
          <Image
            className={cn(
              "object-cover object-center h-full w-full rounded-3xl",
              imgClassName
            )}
            src={img}
            alt={title}
          />
        )}
      </div>
      <div
        className={`absolute right-0 -bottom-5 ${
          id === 4 && "w-full opacity-80"
        }`}
      >
        {spareImg && (
          <Image
            className={cn(
              "object-cover object-center h-full w-full",
              spareImgClassName
            )}
            src={spareImg}
            alt={title}
          />
        )}
      </div>
      {id === 3 && (
        <BackgroundGradientAnimation containerClassName="flex items-center">
          <div className="mt-5" onClick={handleCopyClick}>
            <div className={cn("absolute z-50 bottom-5 right-10")}>
              <Confetti copied={copied} />
              <div className="relative flex justify-center">
                <MagicButton content="My Email" icon={FaRegCopy} />
              </div>
            </div>
          </div>
        </BackgroundGradientAnimation>
      )}
      {id === 2 && (
        <div className="flex gap-1 lg:gap-5 group-hover/bento:translate-x-2 transition duration-200 w-fit absolute -right-3 lg:-right-2">
          <div className="grid-cols-2 grid gap-3 lg:gap-2">
            {tech_stack_data.map((tech, id) => {
              return (
                <span
                  key={id}
                  className={cn(
                    "py-2 lg:py-3 lg:px-3 px-3 text-xs lg:text-base text-white opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]",
                    id % 2 === 0 && "-translate-y-6"
                  )}
                >
                  {tech}
                </span>
              );
            })}
          </div>
        </div>
      )}
      {id === 1 && <Globe />}
      {header?.()}
      {id === 0 ? (
        <div className="absolute ml-4 bottom-[20%]  group-hover/bento:translate-x-2 transition duration-200">
          <p
            className="font-sans z-50 text-xl font-bold w-full md:w-[60%] "
            style={{
              background: `linear-gradient(45deg, rgb(149, 92, 255) 0%, rgb(163, 94, 253) 19%, rgb(173, 96, 251) 27%, rgb(181, 93, 248) 34%, rgb(194, 95, 247) 41%, rgb(203, 98, 244) 47%, rgb(214, 113, 244) 53%, rgb(222, 136, 246) 59%, rgb(232, 160, 248) 66%, rgb(240, 184, 250) 73%, rgb(247, 208, 251) 81%, rgb(254, 230, 252) 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "24px",
              fontWeight: "bold",
              textDecoration: "underline", // Adds an underline
              textDecorationColor: "rgba(149, 92, 255, 0.5)", // Sets solid underline color (optional fallback)
              textDecorationThickness: "2px",
            }}
          >
            {description}
          </p>
        </div>
      ) : (
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 absolute md:h-full min-h-40 flex flex-col p-5 lg:p-10 px-5"
          )}
        >
          <div className="font-sans font-base text-[#c1c2d3] text-sm md:text-xs lg:text-base z-50 dark:text-neutral-200 mb-2 mt-2">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-50 dark:text-neutral-300">
            {title}
          </div>
        </div>
      )}
    </div>
  );
};
