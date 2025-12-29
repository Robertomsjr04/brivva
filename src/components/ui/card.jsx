import React from "react";
import { cn } from "../../lib/utils";

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "bg-brivvaSurface rounded-xl shadow-md p-6 border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

export { Card };

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
