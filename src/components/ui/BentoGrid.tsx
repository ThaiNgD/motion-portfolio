import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[14rem] grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-[1200px] mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};
