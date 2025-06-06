import { z } from "zod";

export const contactUsSchema = z.object({
  firstName: z.string().min(1, "Please enter your first name"),
  lastName: z.string().min(1, "Please enter your last name"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z
    .string()
    .regex(/^\d{3}-\d{3}-\d{4}$/, "Phone number must follow the format: xxx-xxx-xxxx"),
  zipCode: z.string().min(5, "Please enter your zip code"),
  message: z.string().min(1, "Please enter your message"),
});
