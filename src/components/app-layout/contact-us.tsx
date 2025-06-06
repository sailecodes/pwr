"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { contactUsSchema } from "@/lib/schemas";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomButton from "../general/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

function CustomFormField({
  control,
  name,
  label,
  placeholder,
  isTextarea,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  control: any;
  name: string;
  label: string;
  placeholder: string;
  isTextarea?: boolean;
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
                className="border-pwr-primary/30 h-[150px] resize-none"
                {...field}
              />
            ) : (
              <Input
                className="border-pwr-primary/30 text-sm"
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

export default function ContactUs() {
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

  function onSubmit(vals: z.infer<typeof contactUsSchema>) {
    console.log(vals);
  }

  return (
    <section className="text-pwr-primary mx-auto my-12 max-w-7xl space-y-8 px-10 py-8 lg:px-16 lg:py-12">
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
          />
          <CustomFormField
            control={form.control}
            name="lastName"
            label="Last Name"
            placeholder="Doe"
          />
          <CustomFormField
            control={form.control}
            name="email"
            label="Email"
            placeholder="jdoe@gmail.com"
          />
          <CustomFormField
            control={form.control}
            name="phoneNumber"
            label="Phone Number"
            placeholder="123-456-7890"
          />
          <CustomFormField
            control={form.control}
            name="zipCode"
            label="Zip Code"
            placeholder="12345"
            className="sm:col-span-full"
          />
          <CustomFormField
            control={form.control}
            isTextarea
            name="message"
            label="Message"
            placeholder=""
            className="sm:col-span-full"
          />
          <CustomButton
            isPrimary
            className="mx-auto w-fit sm:col-span-full"
          >
            SUBMIT
          </CustomButton>
        </form>
      </Form>
    </section>
  );
}
