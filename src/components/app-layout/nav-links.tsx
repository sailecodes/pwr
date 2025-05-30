"use client";

import { ArrowRightIcon, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";
import { navServiceCategories } from "@/lib/data";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";

export function CustomNavigationMenuTrigger({
  children,
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuTrigger>) {
  return (
    <NavigationMenuTrigger
      className={cn(
        navigationMenuTriggerStyle(),
        "data-[state=open]:text-pwr-primary-foreground focus-visible:ring-ring/50 hover:text-pwr-primary-foreground focus:text-pwr-primary-foreground bg-transparent outline-none hover:bg-transparent focus:bg-transparent active:bg-transparent data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent data-[state=open]:focus:bg-transparent",
        className,
      )}
      {...props}
    >
      {children}
    </NavigationMenuTrigger>
  );
}

export interface NavigationMenuContentItemProps {
  header: string;
  services: string[];
}

export function NavigationMenuContentItem({ header, services }: NavigationMenuContentItemProps) {
  return (
    <div className="mx-2 w-[200px] space-y-2 rounded-lg px-4 py-2 hover:bg-gray-100">
      <header className="text-sm font-bold">{header}</header>
      <ul className="grid gap-1 text-sm text-gray-500">
        {services.map((service, ind) => (
          <li
            key={`${service}-${ind}-service`}
            className="underline-offset-2 hover:cursor-pointer hover:text-gray-600 hover:underline"
          >
            {service}
          </li>
        ))}
      </ul>
    </div>
  );
}

export interface NavLinksStackPrimaryProps {
  trigger: string;
  data: string[];
}

export function NavLinksStackPrimary({ trigger, data }: NavLinksStackPrimaryProps) {
  return (
    <NavigationMenuItem>
      <CustomNavigationMenuTrigger>{trigger}</CustomNavigationMenuTrigger>
      <NavigationMenuContent className="h-[500px] overflow-y-scroll py-4 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100">
        {data.map((data, ind) => (
          <NavigationMenuContentItem
            key={`${data}-${ind}-service`}
            header={data}
            services={["Service 1", "Service 2"]}
          />
        ))}
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

export default function NavLinks() {
  return (
    <NavigationMenu className="text-pwr-primary-foreground flex items-center gap-8 font-medium">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <Link
              href="/"
              className="hover:text-pwr-primary-foreground focus:text-pwr-primary-foreground underline-offset-2 hover:bg-transparent hover:underline focus:bg-transparent active:bg-transparent"
            >
              Home
            </Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavLinksStackPrimary trigger="Services" data={navServiceCategories} />
      </NavigationMenuList>
    </NavigationMenu>
  );
}
