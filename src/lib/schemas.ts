import { z } from "zod";

export const contactUsSchema = z.object({
  firstName: z.string().min(1, "Please enter your first name"),
  lastName: z.string().min(1, "Please enter your last name"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().regex(/^\d{3}-\d{3}-\d{4}$/, "Phone number must follow the format: xxx-xxx-xxxx"),
  zipCode: z.string().min(1, "Please enter your zip code"),
  attachment: z
    .instanceof(File, { message: "Please upload a valid file" })
    .optional()
    .refine((file) => !file || file.size <= 10 * 1024 * 1024, "File size must be less than 10MB")
    .refine(
      (file) =>
        !file ||
        [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "text/plain",
          "image/jpeg",
          "image/png",
        ].includes(file.type),
      "File must be a PDF, DOC, DOCX, TXT, JPEG, or PNG",
    ),
  message: z.string().min(1, "Please enter your message"),
});
