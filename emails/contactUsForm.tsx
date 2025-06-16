import { Body, Container, Head, Html, Preview, Section, Text } from "@react-email/components";

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000";

export const ContactUsFormEmail = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  zipCode,
  message,
}: {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  zipCode: string;
  message: string;
}) => {
  return (
    <Html>
      <Head />
      <Body style={main}>
        <Preview>
          From {firstName} {lastName}
        </Preview>
        <Container style={container}>
          <Section style={content}>
            <Text style={paragraph}>
              Full Name: {firstName} {lastName} <br />
              Email: {email} <br />
              Phone Number: {phoneNumber} <br />
              Zip Code: {zipCode}
              <br />
              <br />
              Message:
              <br />
              {message}
            </Text>
          </Section>
        </Container>

        <Section style={footer}>
          <Text style={{ textAlign: "center", color: "#132d38" }}>
            © 2025 Power Communications LLC. All Rights Reserved
          </Text>
        </Section>
      </Body>
    </Html>
  );
};

export default ContactUsFormEmail;

const fontFamily = "HelveticaNeue,Helvetica,Arial,sans-serif";

const main = {
  backgroundColor: "#efeef1",
  fontFamily,
};

const paragraph = {
  lineHeight: 1.5,
  fontSize: 14,
};

const container = {
  maxWidth: "580px",
  margin: "30px auto",
  backgroundColor: "#e7eaeb",
};

const footer = {
  maxWidth: "580px",
  margin: "0 auto",
};

const content = {
  padding: "5px 20px 10px 20px",
};
