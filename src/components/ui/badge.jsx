import { cn } from "../../lib/utils";

export function Badge({ className, ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 bg-brivvaSecondary/10 text-brivvaPrimary border border-transparent rounded-full px-4 py-1.5 text-sm font-medium",
        className
      )}
      {...props}
    />
  );
}
