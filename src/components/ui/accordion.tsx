"use client";

import { ChevronRight, Plus } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";
import * as AccordionPrimitive from "@radix-ui/react-accordion";

function Accordion({ ...props }: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      {...props}
    />
  );
}

function AccordionItem({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0", className)}
      {...props}
    />
  );
}

function AccordionTrigger({
  withIcon,
  iconPlus,
  iconLeft,
  iconRight,
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
  withIcon?: boolean;
  iconPlus?: boolean;
  iconLeft?: boolean;
  iconRight?: boolean;
}) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          `focus-visible:border-ring focus-visible:ring-ring/50 relative flex flex-1 items-center justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 ${iconPlus ? "[&[data-state=open]>svg]:rotate-180" : "[&[data-state=open]>svg]:rotate-90"}`,
          className,
        )}
        {...props}>
        {children}
        {withIcon && iconLeft ? (
          iconPlus ? (
            <Plus className="pointer-events-none absolute left-5 size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
          ) : (
            <ChevronRight className="pointer-events-none absolute left-5 size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
          )
        ) : (
          <></>
        )}
        {withIcon && iconRight ? (
          iconPlus ? (
            <Plus className="pointer-events-none absolute right-5 size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
          ) : (
            <ChevronRight className="pointer-events-none absolute right-5 size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
          )
        ) : (
          <></>
        )}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}>
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
