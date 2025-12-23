import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-brivvaPrimary text-white hover:bg-[#0f3e66] focus-visible:ring-brivvaSecondary",
        secondary:
          "bg-white text-brivvaPrimary border border-brivvaPrimary hover:bg-[#e9f0f7] focus-visible:ring-brivvaSecondary",
        ghost: "bg-transparent text-brivvaPrimary hover:bg-brivvaBg",
      },
      size: {
        sm: "h-9 px-4",
        md: "h-10 px-5",
        lg: "h-11 px-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export const Button = React.forwardRef(function Button(
  { className, variant, size, as, ...props },
  ref
) {
  const Comp = as === "a" ? "a" : "button";
  return (
    <Comp
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
});
