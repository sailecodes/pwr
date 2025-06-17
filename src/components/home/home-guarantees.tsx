import CustomLink from "../general/custom-link";

export const homeGuaranteesData = [
  {
    href: "/imgs/guarantees-1.jpg",
    text: "We Beat Any Quote.",
  },
  {
    href: "/imgs/guarantees-2.jpg",
    text: "Big Solutions, Small Price.",
  },
  {
    href: "/imgs/guarantees-3.jpg",
    text: "Satisfaction Guaranteed.",
  },
];

function HomeGuaranteesCard({ href, text }: { href: string; text: string }) {
  return (
    <div
      className={`group 510:h-[200px] 510:w-[350px] relative h-[175px] w-[220px] overflow-hidden rounded-lg ${text.includes("Satisfaction") ? "830:col-span-full 1190:col-span-1" : ""}`}>
      <img
        src={href}
        alt={text}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />
      <div className="absolute bottom-0 grid w-full place-items-center rounded-b-lg bg-gray-200 px-2 py-3">
        <p className="text-sm leading-6 font-bold md:text-lg">{text}</p>
      </div>
    </div>
  );
}

export default function HomeGuarantees() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-10 py-4">
      <header className="text-pwr-primary text-center text-3xl font-extrabold">Our Guarantees...</header>
      <div className="1190:grid-cols-3 830:grid-cols-2 grid grid-cols-1 place-items-center gap-4">
        {homeGuaranteesData.map(({ href, text }, ind) => (
          <HomeGuaranteesCard
            key={`${href}-${text}-${ind}`}
            href={href}
            text={text}
          />
        ))}
      </div>
      <CustomLink
        href="/contact-us"
        isPrimary>
        FREE CONSULTATION
      </CustomLink>
    </section>
  );
}
