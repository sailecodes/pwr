import { Resend } from "resend";
import { EmailTemplate } from "../../../components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { firstName, lastName, email, phoneNumber, zipCode, message } = formData;

    const { data, error } = await resend.emails.send({
      from: "PWR Communications <onboarding@resend.dev>",
      to: [process.env.RESEND_TO_EMAIL || "delivered@resend.dev"],
      subject: "New Contact Form Submission",
      react: EmailTemplate({ firstName, lastName, email, phoneNumber, zipCode, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
