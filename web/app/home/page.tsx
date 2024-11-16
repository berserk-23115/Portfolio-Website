import Navbar from "@/components/ui/navbar";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export default function Home() {
    return (
        <main>
            <div className="flex justify-center items-center mt-3 mb-3 w-full">
                <Navbar></Navbar>

            </div>
            <div className = "bg-gray-200">
                <h1 className="text-center text-4xl font-bold">Hello, I am Anushk Kumar</h1>

            </div>
            <div className="flex justify-center items-center bg-slate-400">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full bg-gray-400">
                Hello
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full bg-gray-500">
                Hello1
                </div>
            </div>
            <div className="bg-gray-900">
                <footer className="text-left">
                    <p className="text-neutral-400 mb-1 pt-1 pb-1 pl-1 dark:text-neutral-400 text-">© 2024 Anushk Kumar</p>
                </footer>
            </div>

        </main>



    );
}

