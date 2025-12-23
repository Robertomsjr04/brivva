import * as TooltipPrimitive from "@radix-ui/react-tooltip";
export function TooltipProvider({ children }) {
  return <TooltipPrimitive.Provider>{children}</TooltipPrimitive.Provider>;
}
export function Tooltip({ children }) {
  return <TooltipPrimitive.Root>{children}</TooltipPrimitive.Root>;
}
export function TooltipTrigger({ children }) {
  return <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>;
}
export function TooltipContent({ children }) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content className="z-50 rounded bg-brivvaPrimary text-white px-3 py-2 text-xs">
        {children}
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}
