"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Checkbox } from "@/components/ui/checkbox";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";

// Types
type FormValues = {
  issues: (typeof FIRST_Q_ITEMS)[number][];
  otherIssue?: string;
  itSetup?: (typeof SECOND_Q_ITEMS)[number];
  businessType?: (typeof THIRD_Q_ITEMS)[number];
  otherBusiness?: string;
  employeeCount?: (typeof FOURTH_Q_ITEMS)[number];
  name: string;
  company: string;
  phoneNumber: string;
  email: string;
  more?: string;
};

// Constants
const BUTTON_STYLES = {
  base: "w-[100px] rounded-md px-4 py-2 text-bg",
  primary: "bg-pwr-primary",
  submit: "bg-purple-400",
  disabled: "opacity-80",
  enabled: "hover:cursor-pointer",
};

const FIRST_Q_ITEMS = [
  "Wi-Fi is slow or spotty",
  "Things keep breaking — no reliable help",
  "No backups / worried about security",
  "Current IT guy is unresponsive",
  "No website or tech is outdated",
  "Other",
] as const;
const SECOND_Q_ITEMS = ["Yes, in-house", "Yes, outsourced", "No, we’re doing it ourselves"] as const;
const THIRD_Q_ITEMS = [
  "Office-based",
  "Retail",
  "Warehouse / Industrial",
  "Medical / Dental",
  "Nonprofit / School",
  "Other",
] as const;
const FOURTH_Q_ITEMS = ["1–5", "6–20", "21–50", "51–100", "100+"] as const;

export default function CTA() {
  const [currQ, setCurrQ] = useState(0);
  const [hasSliderLoaded, setHasSliderLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    drag: false,
    slideChanged(slider) {
      setCurrQ(slider.track.details.rel);
    },
    created() {
      setHasSliderLoaded(true);
    },
  });

  const formSchema = z
    .object({
      issues: z.array(z.enum(FIRST_Q_ITEMS)).min(1, { message: "Select at least one issue" }),
      otherIssue: z.string().optional(),
      itSetup: z.enum(SECOND_Q_ITEMS, {
        errorMap: () => ({ message: "Please select an option" }),
      }),
      businessType: z.enum(THIRD_Q_ITEMS, {
        errorMap: () => ({ message: "Please select a business type" }),
      }),
      otherBusiness: z.string().optional(),
      employeeCount: z.enum(FOURTH_Q_ITEMS, {
        errorMap: () => ({ message: "Please select an option" }),
      }),
      name: z.string().min(1, "Please enter your name"),
      company: z.string().min(1, "Please enter your company"),
      phoneNumber: z.string().regex(/^\d{3}-\d{3}-\d{4}$/, "Phone number must follow the format: xxx-xxx-xxxx"),
      email: z.string().email("Invalid email address"),
      more: z.string().optional(),
    })
    .refine((data) => !data.issues.includes("Other") || (data.otherIssue && data.otherIssue.trim() !== ""), {
      path: ["otherIssue"],
      message: "Please specify the other issue.",
    })
    .refine((data) => data.businessType !== "Other" || (data.otherBusiness && data.otherBusiness.trim() !== ""), {
      path: ["otherBusiness"],
      message: "Please specify your business type.",
    });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      issues: [],
      otherIssue: "",
      itSetup: undefined,
      businessType: undefined,
      otherBusiness: "",
      employeeCount: undefined,
      name: "",
      company: "",
      phoneNumber: "",
      email: "",
      more: "",
    },
  });

  const router = useRouter();

  const watches = form.watch();
  const selectedIssues = form.watch("issues");
  const selectedBusinessType = form.watch("businessType");

  function onSubmit(vals: z.infer<typeof formSchema>) {
    console.log(vals);
    router.push("/reserve");
  }

  return (
    <section className="text-pwr-primary mx-auto max-w-6xl px-5">
      {hasSliderLoaded && instanceRef.current && <QuestionIndicator currQ={currQ} />}
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mb-7 flex flex-col">
          <div
            ref={sliderRef}
            className="keen-slider">
            <FormField
              control={form.control}
              name="issues"
              render={() => (
                <FormItem className="keen-slider__slide h-fit gap-1">
                  <FormLabel className="text-base">What&apos;s not working well in your current setup?</FormLabel>
                  <FormDescription className="text-bg-muted-foreground">Select all that apply.</FormDescription>
                  <div className="mt-4 space-y-3">
                    {FIRST_Q_ITEMS.map((option) => (
                      <FormField
                        key={option}
                        control={form.control}
                        name="issues"
                        render={({ field }) => {
                          const isChecked = field.value?.includes(option);
                          return (
                            <FormItem
                              key={option}
                              className="flex items-center gap-3">
                              <FormControl>
                                <Checkbox
                                  checked={isChecked}
                                  onCheckedChange={(checked) => {
                                    return checked
                                      ? field.onChange([...field.value, option])
                                      : field.onChange(field.value.filter((v) => v !== option));
                                  }}
                                />
                              </FormControl>
                              <FormLabel className="font-normal">{option === "Other" ? "Other:" : option}</FormLabel>
                            </FormItem>
                          );
                        }}
                      />
                    ))}
                    {selectedIssues.includes("Other") && (
                      <FormField
                        control={form.control}
                        name="otherIssue"
                        render={({ field }) => (
                          <FormItem className="pl-7">
                            <FormControl>
                              <Input
                                placeholder="Please describe..."
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="itSetup"
              render={({ field }) => (
                <FormItem className="keen-slider__slide h-fit gap-1">
                  <FormLabel className="text-base">Do you currently have a dedicated IT person or team?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="mt-4 gap-0 space-y-3">
                      {SECOND_Q_ITEMS.map((option) => (
                        <FormItem
                          key={option}
                          className="flex items-center gap-3">
                          <FormControl>
                            <RadioGroupItem value={option} />
                          </FormControl>
                          <FormLabel className="font-normal">{option}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="businessType"
              render={({ field }) => (
                <FormItem className="keen-slider__slide h-fit gap-1">
                  <FormLabel className="text-base">What type of business do you run?</FormLabel>
                  <div className="mt-4 space-y-3">
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        {THIRD_Q_ITEMS.map((businessType) => (
                          <FormItem
                            key={businessType}
                            className="flex items-center gap-3">
                            <FormControl>
                              <RadioGroupItem value={businessType} />
                            </FormControl>
                            <FormLabel className="font-normal">
                              {businessType === "Other" ? "Other:" : businessType}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    {selectedBusinessType === "Other" && (
                      <FormField
                        control={form.control}
                        name="otherBusiness"
                        render={({ field }) => (
                          <FormItem className="pl-7">
                            <FormControl>
                              <Input
                                placeholder="Please describe your business type..."
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    )}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="employeeCount"
              render={({ field }) => (
                <FormItem className="keen-slider__slide h-fit gap-1">
                  <FormLabel className="text-base">How many employees does your business have?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="mt-4 gap-0 space-y-3">
                      {FOURTH_Q_ITEMS.map((count) => (
                        <FormItem
                          key={count}
                          className="flex items-center gap-3">
                          <FormControl>
                            <RadioGroupItem value={count} />
                          </FormControl>
                          <FormLabel className="font-normal">{count}</FormLabel>
                        </FormItem>
                      ))}
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="keen-slider__slide h-fit">
              <header className="font-medium">Contact Information</header>
              <div className="mt-5 grid grid-cols-2 gap-2 gap-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="more"
                  render={({ field }) => (
                    <FormItem className="col-span-full">
                      <FormLabel>Briefly tell us what you&apos;re looking for</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          className="h-[100px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </div>
          <button
            className={cn(
              BUTTON_STYLES.base,
              BUTTON_STYLES.submit,
              "mx-auto mt-10",
              currQ < 4 && "hidden",
              currQ === 4 && !watches.name && !watches.company && !watches.phoneNumber && !watches.email
                ? BUTTON_STYLES.disabled
                : BUTTON_STYLES.enabled + "block",
            )}>
            Submit
          </button>
        </form>
      </Form>
      {hasSliderLoaded && instanceRef.current && (
        <NavButtons
          currQ={currQ}
          instanceRef={instanceRef}
          watches={watches}
        />
      )}
    </section>
  );
}

function QuestionIndicator({ currQ }: { currQ: number }) {
  return (
    <div className="mb-20 flex items-center justify-between gap-5">
      <div className="grid h-[10px] w-full grid-cols-5 grid-rows-1 gap-1">
        {Array.from(
          [0, 1, 2, 3, 4].map((val) => (
            <div
              key={`question-indicator-${val}`}
              className={`transition-colors duration-100 ${currQ >= val && "bg-indigo-400"}`}
            />
          )),
        )}
      </div>
      <span className="w-[93px] shrink-0 text-xs">{currQ + 1} / 5 Questions</span>
    </div>
  );
}

const isStepValid = (step: number, formData: FormValues) => {
  switch (step) {
    case 0:
      return formData.issues.length > 0 && (!formData.issues.includes("Other") || formData.otherIssue?.trim());
    case 1:
      return !!formData.itSetup;
    case 2:
      return !!formData.businessType && (formData.businessType !== "Other" || formData.otherBusiness?.trim());
    case 3:
      return !!formData.employeeCount;
    default:
      return false;
  }
};

function NavButtons({ currQ, instanceRef, watches }: { currQ: number; instanceRef: any; watches: FormValues }) {
  const isNextDisabled = currQ === 4 || !isStepValid(currQ, watches);
  const isPrevDisabled = currQ === 0;

  return (
    <div className="flex justify-between">
      <button
        className={cn(
          BUTTON_STYLES.base,
          BUTTON_STYLES.primary,
          isPrevDisabled ? BUTTON_STYLES.disabled : BUTTON_STYLES.enabled,
        )}
        disabled={isPrevDisabled}
        onClick={() => instanceRef.current?.prev()}>
        Previous
      </button>
      <button
        className={cn(
          BUTTON_STYLES.base,
          BUTTON_STYLES.primary,
          isNextDisabled ? BUTTON_STYLES.disabled : BUTTON_STYLES.enabled,
        )}
        disabled={isNextDisabled}
        onClick={() => instanceRef.current?.next()}>
        Next
      </button>
    </div>
  );
}
