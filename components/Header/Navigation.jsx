import Link from "next/link";
import Each from "@/utils/Each";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "../ui/navigation-menu";
import { menu, menu_kategori } from "@/constant";


export default function Navigation() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Kategori Lainnya</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="p-4 space-y-2">
              <Each of={menu_kategori} render={({label, href}) => 
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href={href}>{label}</Link>
                </NavigationMenuLink>
              } />
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <Each of={menu} render={({label, href}) => 
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href={href}>{label}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        }/>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
