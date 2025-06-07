import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import ContactUs from "@/components/app-layout/contact-us";
import Footer from "@/components/app-layout/footer";
import Nav from "@/components/app-layout/nav";
import NavAlt from "@/components/app-layout/nav-alt";

const gotham = localFont({
  src: [
    {
      path: "../../public/fonts/Gotham-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gotham-Book.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gotham-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gotham-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Gotham-Black.otf",
      weight: "800",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Power Communications",
  description: "...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gotham.className} mx-auto min-h-screen antialiased`}>
        {/* <Nav /> */}
        <NavAlt />
        {children}
        <Footer />
      </body>
    </html>
  );
}
