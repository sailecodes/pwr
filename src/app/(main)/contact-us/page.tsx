import ContactUsHero from "@/components/contact-us/contact-us-hero";
import AssociatedCompanies from "@/components/home/home-associated-companies";

export default function Contact() {
  return (
    <main className="bg-bg">
      <ContactUsHero />
      <div className="relative -top-[42.875px] space-y-8">
        <AssociatedCompanies />
      </div>
    </main>
  );
}
