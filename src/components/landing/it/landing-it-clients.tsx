import { Star } from "lucide-react";

function LandingITClientsSecondaryTestimonial() {
  return (
    <div className="flex gap-4">
      <div className="flex-1/3">
        <div className="aspect-square">
          <img
            src={"/landing/landing-clients-1.jpg"}
            className="rounded-3xl object-cover"
            alt="Client 1"
          />
        </div>
      </div>
      <div className="flex-2/3 space-y-2 text-sm">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur autem voluptas cumque quasi error fugit
          eos dignissimos, delectus id facilis.
        </p>
        <div className="space-y-1">
          <p>- Company, Name</p>
          <div className="flex">
            {Array.from([1, 2, 3, 4, 5]).map((ind) => (
              <Star
                key={ind}
                className="fill-amber-300 stroke-amber-300"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function LandingITClientsMainTestimonial() {
  return (
    <div className="space-y-5 sm:flex-1/2">
      <div className="mx-auto">
        <img
          src={"/landing/landing-clients-1.jpg"}
          className="mx-auto h-full w-full rounded-3xl object-cover"
          alt="Main Client Testimonial"
        />
      </div>
      <div className="space-y-2 text-sm">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maxime ad ullam maiores sequi ducimus accusantium
          ipsa libero rem placeat, eveniet.
        </p>
        <div className="flex justify-between">
          <p>- Company, Name</p>
          <div className="flex">
            {Array.from([1, 2, 3, 4, 5]).map((ind) => (
              <Star
                key={ind}
                className="fill-amber-300 stroke-amber-300"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LandingITClients() {
  return (
    <section className="px-5">
      <div className="text-pwr-primary mx-auto max-w-6xl min-w-[325px]">
        <header className="mb-5 text-center text-lg/6 font-bold sm:text-left sm:text-3xl/9 lg:text-4xl/10">
          Most Recent Clients
        </header>
        <div className="space-y-10 sm:flex sm:gap-10">
          <LandingITClientsMainTestimonial />
          <div className="flex flex-col gap-5 sm:flex-1/2">
            <LandingITClientsSecondaryTestimonial />
            <LandingITClientsSecondaryTestimonial />
            <LandingITClientsSecondaryTestimonial />
          </div>
        </div>
      </div>
    </section>
  );
}
