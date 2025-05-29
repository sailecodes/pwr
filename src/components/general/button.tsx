import { cn } from "@/lib/utils";
import React from "react";

export default function CustomButton({
  isPrimary = false,
  children,
  className,
  ...props
}: React.ComponentProps<"button"> & { isPrimary?: boolean }) {
  return (
    <button
      className={cn(
        `rounded-lg border px-6 py-2 font-bold transition hover:cursor-pointer ${isPrimary ? "border-pwr-primary text-pwr-primary hover:bg-pwr-primary hover:text-pwr-primary-foreground" : "border-pwr-primary-foreground text-pwr-primary-foreground hover:bg-pwr-primary-foreground hover:text-pwr-primary"}`,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
