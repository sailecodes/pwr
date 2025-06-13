"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { contactUsSchema } from "@/lib/schemas";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomButton from "../general/custom-button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

function CustomFormField({
  control,
  name,
  label,
  placeholder,
  isTextarea,
  isOnPrimary,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  control: any;
  name: string;
  label: string;
  placeholder: string;
  isTextarea?: boolean;
  isOnPrimary?: boolean;
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem
          className={cn(className)}
          {...props}
        >
          <FormLabel>{label}</FormLabel>
          <FormControl>
            {isTextarea ? (
              <Textarea
                placeholder={placeholder}
                className={`h-[150px] resize-none text-sm ${isOnPrimary ? "bg-pwr-primary-foreground" : "border-pwr-primary/30"}`}
                {...field}
              />
            ) : (
              <Input
                className={`text-sm ${isOnPrimary ? "bg-pwr-primary-foreground" : "border-pwr-primary/30"}`}
                placeholder={placeholder}
                {...field}
              />
            )}
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}

export default function ContactUs({ isOnPrimary }: { isOnPrimary?: boolean }) {
  const form = useForm<z.infer<typeof contactUsSchema>>({
    resolver: zodResolver(contactUsSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      zipCode: "",
      message: "",
    },
  });
  async function onSubmit(vals: z.infer<typeof contactUsSchema>) {
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(vals),
    });

    if (!res.ok) {
      console.error("Failed to send email:", await res.text());
    }
  }

  return (
    <section
      className={`border-pwr-primary-muted-foreground mx-auto max-w-7xl space-y-8 rounded-lg px-10 py-8 shadow-[0_0_50px_rgba(0,0,0,0.20)] lg:px-16 lg:py-12 ${isOnPrimary ? "text-pwr-primary-foreground" : "text-pwr-primary"}`}
    >
      <header className="space-y-1">
        <p className="text-3xl font-extrabold">Contact Us</p>
        <p className="text-lg font-bold">Even if you just have some questions!</p>
      </header>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="grid gap-4 sm:grid-cols-2"
        >
          <CustomFormField
            control={form.control}
            name="firstName"
            label="First Name"
            placeholder="John"
            isOnPrimary={isOnPrimary}
          />
          <CustomFormField
            control={form.control}
            name="lastName"
            label="Last Name"
            placeholder="Doe"
            isOnPrimary={isOnPrimary}
          />
          <CustomFormField
            control={form.control}
            name="email"
            label="Email"
            placeholder="jdoe@gmail.com"
            isOnPrimary={isOnPrimary}
          />
          <CustomFormField
            control={form.control}
            name="phoneNumber"
            label="Phone Number"
            placeholder="123-456-7890"
            isOnPrimary={isOnPrimary}
          />
          <CustomFormField
            control={form.control}
            name="zipCode"
            label="Zip Code"
            placeholder="12345"
            className="sm:col-span-full"
            isOnPrimary={isOnPrimary}
          />
          <CustomFormField
            control={form.control}
            isTextarea
            name="message"
            label="Message"
            placeholder=""
            className="sm:col-span-full"
            isOnPrimary={isOnPrimary}
          />
          <CustomButton
            isPrimary={!isOnPrimary}
            className="mx-auto w-fit sm:col-span-full"
          >
            GET YOUR QUOTE NOW
          </CustomButton>
        </form>
      </Form>
    </section>
  );
}
