import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

export default function CustomLink({
  isPrimary = false,
  children,
  href,
  className,
  ...props
}: React.ComponentProps<"a"> & { href: string; isPrimary?: boolean }) {
  return (
    <Link
      href={href}
      className={buttonVariants({
        className: cn(
          `rounded-lg border-2 bg-transparent px-6 py-2 font-bold transition hover:cursor-pointer ${isPrimary ? "border-pwr-primary text-pwr-primary hover:bg-pwr-primary hover:text-pwr-primary-foreground" : "border-pwr-primary-foreground text-pwr-primary-foreground hover:bg-pwr-primary-foreground hover:text-pwr-primary"}`,
          className,
        ),
      })}
      {...props}
    >
      {children}
    </Link>
  );
}
