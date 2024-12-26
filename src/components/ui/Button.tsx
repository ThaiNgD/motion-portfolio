import { cn } from "@/lib/utils";
import { useMemo } from "react";
import { IconType } from "react-icons";

const Button = ({
  content,
  btnClassName,
  handleClick,
  icon,
  iconClass,
}: {
  content: string;
  btnClassName?: string;
  handleClick?: () => void;
  icon?: IconType;
  iconClass?: string;
}) => {
  const Icon = useMemo(() => {
    return icon;
  }, [icon]);
  return (
    <button
      className={cn(
        "inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 text-sm transition-colors  hover:!border-[blue] hover:animate-[spin_2s_linear_infinite]",
        btnClassName && btnClassName
      )}
      onClick={handleClick}
    >
      {content}{" "}
      {Icon && <Icon className={cn("size-4 ml-1", iconClass)} size={16} />}
    </button>
  );
};
{
  /* <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%]  " />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    Border Magic
  </span>
</button>; */
}
export default Button;
