import { cn } from "../../lib/utils";

export function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        "bg-brivvaSurface rounded-xl shadow-md p-6 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
        className
      )}
      {...props}
    />
  );
}

export function CardTitle({ className, ...props }) {
  return (
    <h3
      className={cn("text-lg font-semibold text-brivvaPrimary", className)}
      {...props}
    />
  );
}

export function CardDescription({ className, ...props }) {
  return (
    <p className={cn("mt-2 text-sm text-brivvaText", className)} {...props} />
  );
}
