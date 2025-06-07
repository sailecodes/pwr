import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  zipCode: string;
  message: string;
}

export const EmailTemplate = ({
  firstName,
  lastName,
  email,
  phoneNumber,
  zipCode,
  message,
}: EmailTemplateProps) => (
  <div>
    <h1>New Contact Form Submission</h1>
    <p>
      From: {firstName} {lastName}
    </p>
    <p>Email: {email}</p>
    <p>Phone: {phoneNumber}</p>
    <p>Zip Code: {zipCode}</p>
    <div>
      <h2>Message:</h2>
      <p>{message}</p>
    </div>
  </div>
);
