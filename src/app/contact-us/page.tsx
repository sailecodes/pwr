import ContactUs from "@/components/app-layout/contact-us";
import AssociatedCompanies from "@/components/home/associated-companies";

export default function Contact() {
  return (
    <main>
      <section
        className="relative -mt-[93.63px] grid px-10 pt-[93.63px] pb-12 lg:px-16"
        style={{
          backgroundImage: "url('/bgs/contact-us-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-pwr-primary/65 absolute inset-0" />
        <div className="bg-pwr-primary relative z-10 mt-12 rounded-md">
          <ContactUs isOnPrimary />
        </div>
      </section>
      <AssociatedCompanies />
    </main>
  );
}
