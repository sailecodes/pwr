import { Resend } from "resend";
import { ContactUsFormEmail } from "../../../../emails/contactUsForm";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phoneNumber = formData.get("phoneNumber") as string;
    const zipCode = formData.get("zipCode") as string;
    const message = formData.get("message") as string;
    const attachment = formData.get("attachment") as File | null;

    const emailAttachments = [];

    if (attachment) {
      const buffer = Buffer.from(await attachment.arrayBuffer());
      emailAttachments.push({
        filename: attachment.name,
        content: buffer,
      });
    }

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
        attachment,
      }),
      attachments: emailAttachments,
    });

    if (error) {
      return Response.json({ error }, { status: 400 });
    }

    return Response.json({ data }, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
