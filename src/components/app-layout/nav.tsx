import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";

export default function Nav() {
  return (
    <div className="sticky top-0 z-50 flex gap-4 px-16 py-4">
      <p className="text-2xl font-bold">Power Com</p>
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
      <Button variant="outline" className="hover:cursor-pointer">
        Contact
      </Button>
      <div className="ml-auto flex items-center gap-2">
        <PhoneCall className="size-4" />
        <span>555-666-1234</span>
      </div>
    </div>
  );
}
