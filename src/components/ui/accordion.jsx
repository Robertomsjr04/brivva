import * as AccordionPrimitive from "@radix-ui/react-accordion";

export const Accordion = AccordionPrimitive.Root;
export const AccordionItem = AccordionPrimitive.Item;
export const AccordionTrigger = ({ children, ...props }) => (
  <AccordionPrimitive.Trigger
    {...props}
    className="flex w-full items-center justify-between py-3 text-left font-semibold text-brivvaPrimary"
  >
    {children}
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path
        d="M6 9l6 6 6-6"
        stroke="#155184"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </AccordionPrimitive.Trigger>
);
export const AccordionContent = ({ children, ...props }) => (
  <AccordionPrimitive.Content
    {...props}
    className="pb-4 text-sm text-brivvaText"
  >
    {children}
  </AccordionPrimitive.Content>
);
