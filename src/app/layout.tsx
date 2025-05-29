import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/app-layout/footer";
import Nav from "@/components/app-layout/nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// TODO: Metadata
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} mx-auto min-h-screen antialiased`}
      >
        {/* <Nav /> */}
        {children}
        {/* <Contact /> */}
        <Footer />
      </body>
    </html>
  );
}
