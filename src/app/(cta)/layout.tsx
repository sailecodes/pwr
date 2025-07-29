export default function LandingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="min-h-dvh w-dvw pt-5">{children}</main>;
}
