import { cn } from "@/lib/utils";
import { useMemo } from "react";
import { IconType } from "react-icons";

const MagicButton = ({
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
        "relative inline-flex h-12 overflow-hidden rounded-lg min-w-[200px] p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
        btnClassName && btnClassName
      )}
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="inline-flex font-bold h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-3 py-1 text-sm text-white backdrop-blur-3xl">
        {content}{" "}
        {Icon && <Icon className={cn("size-4 ml-2", iconClass)} size={16} />}
      </span>
    </button>
  );
};

export default MagicButton;
