import * as DialogPrimitive from "@radix-ui/react-dialog";

export function Dialog({ open, onOpenChange, children }) {
  return <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>{children}</DialogPrimitive.Root>;
}
export function DialogTrigger({ children }) {
  return <DialogPrimitive.Trigger asChild>{children}</DialogPrimitive.Trigger>;
}
export function DialogContent({ children }) {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 bg-black/30" />
      <DialogPrimitive.Content className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-md bg-white rounded-lg shadow-lg p-6">
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
}
