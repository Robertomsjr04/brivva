import { cn } from "../../lib/utils";
export function Textarea({ className, ...props }) {
  return <textarea className={cn("w-full border border-gray-300 rounded-md px-3 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-brivvaSecondary", className)} {...props} />;
}
