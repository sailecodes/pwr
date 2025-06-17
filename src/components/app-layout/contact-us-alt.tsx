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
  type,
  isTextarea,
  isPrimaryForeground,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  control: any;
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  isTextarea?: boolean;
  isPrimaryForeground?: boolean;
}) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem
          className={cn(className)}
          {...props}>
          <FormLabel className="data-[error=true]:text-red-500">{label}</FormLabel>
          <FormControl>
            {isTextarea ? (
              <Textarea
                placeholder={placeholder}
                className={`h-[150px] resize-none text-sm ${isPrimaryForeground ? "bg-pwr-primary-foreground text-pwr-primary" : "border-pwr-primary/30"}`}
                {...field}
              />
            ) : (
              <Input
                className={`file:text-pwr-primary rounded-sm text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium ${
                  isPrimaryForeground ? "bg-pwr-primary-foreground text-pwr-primary" : "border-pwr-primary/30"
                }`}
                type={type}
                placeholder={placeholder}
                onChange={
                  type === "file" ? (e) => field.onChange(e.target.files?.[0]) : (e) => field.onChange(e.target.value)
                }
                accept={type === "file" ? ".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png" : undefined}
              />
            )}
          </FormControl>
          <FormMessage className="text-red-500" />
        </FormItem>
      )}
    />
  );
}

export default function ContactUs({
  isPrimaryForeground,
  classNames,
}: {
  isPrimaryForeground?: boolean;
  classNames?: { form: string };
}) {
  const form = useForm<z.infer<typeof contactUsSchema>>({
    resolver: zodResolver(contactUsSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      zipCode: "",
      attachment: undefined,
      message: "",
    },
  });
  async function onSubmit(vals: z.infer<typeof contactUsSchema>) {
    const formData = new FormData();

    formData.append("firstName", vals.firstName);
    formData.append("lastName", vals.lastName);
    formData.append("email", vals.email);
    formData.append("phoneNumber", vals.phoneNumber);
    formData.append("zipCode", vals.zipCode);
    formData.append("message", vals.message);

    if (vals.attachment) {
      formData.append("attachment", vals.attachment as File);
    }

    const res = await fetch("/api/send", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      console.error("Failed to send email:", await res.text());
    }
  }

  return (
    <section
      className={`mx-auto max-w-7xl space-y-8 ${isPrimaryForeground ? "text-pwr-primary-foreground" : "text-pwr-primary"}`}>
      <header className="space-y-1">
        <p className="text-3xl font-extrabold">Contact Us</p>
        <p className="text-lg font-bold">Even if you just have some questions!</p>
      </header>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn("grid gap-4", classNames ? classNames.form : "")}>
          <CustomFormField
            control={form.control}
            name="firstName"
            label="First Name"
            placeholder="John"
            isPrimaryForeground={isPrimaryForeground}
          />
          <CustomFormField
            control={form.control}
            name="lastName"
            label="Last Name"
            placeholder="Doe"
            isPrimaryForeground={isPrimaryForeground}
          />
          <CustomFormField
            control={form.control}
            name="email"
            label="Email"
            placeholder="jdoe@gmail.com"
            isPrimaryForeground={isPrimaryForeground}
          />
          <CustomFormField
            control={form.control}
            name="phoneNumber"
            label="Phone Number"
            placeholder="123-456-7890"
            isPrimaryForeground={isPrimaryForeground}
          />
          <CustomFormField
            control={form.control}
            name="zipCode"
            label="Zip Code"
            placeholder="12345"
            isPrimaryForeground={isPrimaryForeground}
          />
          <CustomFormField
            control={form.control}
            name="attachment"
            label="Attachment"
            type="file"
            placeholder="12345"
            isPrimaryForeground={isPrimaryForeground}
          />
          <CustomFormField
            control={form.control}
            isTextarea
            name="message"
            label="Message"
            placeholder=""
            className="sm:col-span-full"
            isPrimaryForeground={isPrimaryForeground}
          />
          <CustomButton
            isPrimary={!isPrimaryForeground}
            className="mx-auto mt-4 w-fit sm:col-span-full">
            GET YOUR QUOTE NOW
          </CustomButton>
        </form>
      </Form>
    </section>
  );
}
