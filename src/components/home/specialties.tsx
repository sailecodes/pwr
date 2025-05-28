import { Antenna, ListTreeIcon, Server, Tv2, Video, Zap } from "lucide-react";
import SpecialtiesCard from "./specialties-card";

export default function Specialties() {
  return (
    <section className="space-y-8 py-8 md:px-16">
      <header className="text-pwr-primary text-3xl font-bold">Our Specialties</header>
      <div className="grid gap-4 md:grid-cols-2">
        <SpecialtiesCard
          icon={Antenna}
          header="Distributed Antenna Systems"
          text="We design and install customized DAS solutions that enhance wireless coverage in large or signal-challenged environments, ensuring reliable connectivity throughout your facility."
        />
        <SpecialtiesCard
          icon={Zap}
          header="Electrical"
          text="Our licensed electricians provide comprehensive electrical services, from new installations to system upgrades and maintenance, with a focus on safety, code compliance, and efficiency."
        />
        <SpecialtiesCard
          icon={Tv2}
          header="IT Services"
          text="We offer end-to-end IT solutions including network setup, server configuration, system integration, and ongoing support to keep your technology infrastructure secure and optimized."
        />
        <SpecialtiesCard
          icon={Server}
          header="Fiber Optics"
          text="We specialize in the installation and termination of high-speed fiber optic networks, delivering fast, reliable data transmission for both enterprise and commercial applications."
        />
        <SpecialtiesCard
          icon={Video}
          header="Security Systems"
          text="Our team installs and maintains advanced security systems, including surveillance cameras, access control, and monitoring solutions tailored to protect your assets and personnel."
        />
        <SpecialtiesCard
          icon={ListTreeIcon}
          header="Structured Cabling"
          text="We design and implement structured cabling systems that support high-performance data and voice networks, ensuring scalability, reliability, and ease of maintenance."
        />
      </div>
    </section>
  );
}
