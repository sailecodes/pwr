export interface ServiceSummaryProps {
  summary: string;
}

export default function ServiceSummary({ summary }: ServiceSummaryProps) {
  return (
    <section className="text-pwr-primary flex flex-col space-y-4">
      <header className="text-3xl font-extrabold">Summary</header>
      {/* <p className="text-sm">{summary}</p> */}
      <p className="text-sm">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque temporibus dolor pariatur
        exercitationem error rerum assumenda similique obcaecati, mollitia optio totam ea
        perspiciatis, veritatis architecto porro delectus, deleniti beatae nostrum. Lorem ipsum,
        dolor sit amet consectetur adipisicing elit. Atque temporibus dolor pariatur exercitationem
        error rerum assumenda similique obcaecati, mollitia optio totam ea perspiciatis, veritatis
        architecto porro delectus, deleniti beatae nostrum.
      </p>
      <button className="border-pwr-primary hover:bg-pwr-primary hover:text-pwr-primary-foreground place-self-center rounded-md border-2 px-4 py-2 font-bold transition hover:cursor-pointer">
        FREE CONSULTATION
      </button>
    </section>
  );
}
