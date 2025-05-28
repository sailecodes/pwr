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
import { PhoneCall } from "lucide-react";

export default function Nav() {
  return (
    <div className="sticky top-0 flex gap-4 px-16 py-4">
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
            <NavigationMenuContent></NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
            <NavigationMenuContent></NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Brands</NavigationMenuTrigger>
            <NavigationMenuContent></NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()} href="/remote-support">
              Remote Support
            </NavigationMenuLink>
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
