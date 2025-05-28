import { Button } from "../ui/button";

export default function Hero() {
  return (
    <section className="flex h-[500px] flex-col items-center justify-center gap-12">
      <div className="text-center text-sm leading-15 font-medium">
        Looking For,
        <p className="text-3xl font-bold">Smart IT Solutions That Power Your Business</p>
        We Got You Covered.
      </div>
      <Button variant="outline" size="lg">
        FREE QUOTE
      </Button>
    </section>
  );
}
