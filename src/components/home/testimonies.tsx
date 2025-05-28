import TestimoniesCard from "./testimonies-card";

export default function Testimonies() {
  return (
    <section className="bg-pwr-primary space-y-8 rounded-md px-16 py-8">
      <header className="text-pwr-primary-foreground">
        <p className="text-3xl font-bold">Why POWERCOMS?</p>
        <p className="text-pwr-primary-muted-foreground text-xl font-semibold">Don't Just Take Our Word For It...</p>
      </header>
      <div className="flex gap-8">
        <TestimoniesCard company="AT&T" name="John Doe" review="" rating={5} />
        <TestimoniesCard company="TikTok" name="Peter Parker" review="" rating={5} />
        <TestimoniesCard company="Tesla" name="Tony Stark" review="" rating={4} />
        <TestimoniesCard company="OC Grace" name="Clark Kent" review="" rating={5} />
      </div>
    </section>
  );
}
