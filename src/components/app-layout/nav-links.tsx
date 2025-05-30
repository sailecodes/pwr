import { ArrowRight } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export default function NavLinks() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/">
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="h-[200px] w-[200px] px-4 py-2 font-semibold">
              <Popover>
                <PopoverTrigger className="flex w-full items-center justify-between">
                  <p>IT Services</p>
                  <ArrowRight className="size-4" />
                </PopoverTrigger>
                <PopoverContent>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/">
                    Service 1
                  </NavigationMenuLink>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/">
                    Service 2
                  </NavigationMenuLink>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/">
                    Service 3
                  </NavigationMenuLink>
                </PopoverContent>
              </Popover>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
