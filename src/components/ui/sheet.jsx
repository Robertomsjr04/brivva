import * as React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { cn } from "../../lib/utils";

export function Sheet({ open, onOpenChange, children }) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      {children}
    </Dialog.Root>
  );
}

export function SheetTrigger({ children }) {
  return <Dialog.Trigger asChild>{children}</Dialog.Trigger>;
}

export function SheetContent({ className, children }) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/30" />
      <Dialog.Content
        className={cn(
          "fixed right-0 top-0 h-full w-72 bg-white shadow-lg p-4 focus:outline-none",
          className
        )}
      >
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}
