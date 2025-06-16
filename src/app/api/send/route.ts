import { Resend } from "resend";
import { ContactUsFormEmail } from "../../../../emails/contactUsForm";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, phoneNumber, zipCode, message } = await request.json();
    const { data, error } = await resend.emails.send({
      from: "Power Communications <noreply@pwrcoms.com>",
      to: "cp@powercoms.net",
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      react: ContactUsFormEmail({
        firstName,
        lastName,
        email,
        phoneNumber,
        zipCode,
        message,
      }),
    });
    if (error) {
      return Response.json({ error }, { status: 400 });
    }
    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
