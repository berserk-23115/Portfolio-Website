import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"
import { div } from "framer-motion/client";

export default function Navbar() {
    return (
        <div className="flex">
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem >
                        <NavigationMenuTrigger>
                            Home
                        </NavigationMenuTrigger>

                        <NavigationMenuTrigger>
                            About Me
                        </NavigationMenuTrigger>
                        <NavigationMenuTrigger>
                            Projects
                        </NavigationMenuTrigger>

                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    );
}