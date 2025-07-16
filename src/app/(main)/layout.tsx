import Footer from "@/components/app-layout/footer";
import NavAlt from "@/components/app-layout/nav-alt";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <NavAlt />
      {children}
      <Footer />
    </main>
  );
}
