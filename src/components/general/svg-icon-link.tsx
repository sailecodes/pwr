export default function SVGIconLink({
  href,
  fill = "#fff",
  d,
}: {
  href: string;
  fill?: string;
  d: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg
        className="h-6 w-6"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={fill}
          d={d}
        />
      </svg>
    </a>
  );
}
