import { cn } from "@/lib/utils";

export default function SVGIconLink({
  href,
  fill = "#fff",
  d,
  className,
}: {
  href: string;
  fill?: string;
  d: string;
  className?: string;
}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <svg
        className={cn("h-6 w-6", className)}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill={fill} d={d} />
      </svg>
    </a>
  );
}
