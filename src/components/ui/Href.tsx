import { cn } from "@/lib/utils";
import Link from "next/link";
import { useMemo } from "react";
import { IconType } from "react-icons";

const Href = ({
  content,
  href,
  btnClassName,
  icon,
  iconClass,
}: {
  content: string;
  href: string;
  btnClassName?: string;
  icon?: IconType;
  iconClass?: string;
}) => {
  const Icon = useMemo(() => {
    return icon;
  }, [icon]);
  return (
    <Link
      className={cn(
        "inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[#000103] hover:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 text-sm focus:ring-offset-2 focus:ring-offset-slate-50",
        btnClassName && btnClassName
      )}
      role="button"
      href={href}
    >
      {content}{" "}
      {Icon && <Icon className={cn("size-4 ml-1", iconClass)} size={16} />}
    </Link>
  );
};

export default Href;
