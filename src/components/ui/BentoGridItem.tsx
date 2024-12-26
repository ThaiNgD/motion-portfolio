import { cn } from "@/lib/utils";
import { useMemo } from "react";

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: GridItem) => {
  const Icon = useMemo(() => {
    return icon;
  }, [icon]);
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 dark:bg-[linear-gradient(90deg,_rgba(201,130,197,1)_0%,_rgba(192,132,252,1)_68%)] bg-[linear-gradient(90deg,_rgba(114,244,238,1)_0%,_rgba(59,194,231,1)_100%)]",
        className
      )}
    >
      {header?.()}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {Icon && <Icon className="h-4 w-4 text-neutral-500" />}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
