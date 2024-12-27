import { cn } from "@/lib/utils";
import Image from "next/image";
import { useMemo } from "react";
import { BackgroundGradientAnimation } from "./GradientBackGround";
export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  spareImg,
  spareImgClassName,
  img,
  imgClassName,
}: GridItem & { id: number }) => {
  const Icon = useMemo(() => {
    return icon;
  }, [icon]);
  return (
    <div
      className={cn(
        "relative row-span-1 rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none  dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 dark:bg-[linear-gradient(45deg,_rgb(149,_92,_255)_0%,_rgb(163,_94,_253)_19%,_rgb(173,_96,_251)_27%,_rgb(181,_93,_248)_34%,_rgb(194,_95,_247)_41%,_rgb(203,_98,_244)_47%,_rgb(214,_113,_244)_53%,_rgb(222,_136,_246)_59%,_rgb(232,_160,_248)_66%,_rgb(240,_184,_250)_73%,_rgb(247,_208,_251)_81%,_rgb(254,_230,_252)_100%)] bg-[linear-gradient(90deg,_rgba(114,244,238,1)_0%,_rgba(59,194,231,1)_100%)]",
        className,
        id === 0 && "md:row-span-2 md:col-span-2"
      )}
    >
      <div className={`${id === 5 && "flex justify-center"} h-full`}>
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
      {id === 5 && (
        <BackgroundGradientAnimation>
          <div className="absolute z-50 flex items-center justify-center text-white font-bold" />
        </BackgroundGradientAnimation>
      )}
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
        <div className="group-hover/bento:translate-x-2 transition duration-200">
          {Icon && <Icon className="h-4 w-4 text-neutral-500" />}
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
            {title}
          </div>
          <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
            {description}
          </div>
        </div>
      )}
    </div>
  );
};
