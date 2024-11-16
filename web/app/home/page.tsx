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
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams"
export default function Home() {
    return (
        <main>
            <div className="flex justify-center items-center pt-3 pb-3 mb-3 w-full sticky top-0 z-10 bg-slate-100">
                <Navbar />
            </div>
            <div>
                <BackgroundBeamsWithCollision>
                    <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
                        Hey ! , Welcome I am  <br/>
                        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                                <span className="">Anushk Kumar</span>
                            </div>
                            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                                <span className="">Anushk Kumar</span>
                            </div>
                        </div>
                    </h2>
                </BackgroundBeamsWithCollision>
            </div>

            <div className="mb-100 pl-10 rounded-lg border-10 border-black">
                <div className="text-4xl font-bold font-sans text-left mt-5 ml-10">Short Bio</div>
                <br/>
                <p className="ml-10 mr-40 font-sans text-xl text-justify">
                    I am an aspiring software engineer who loves to code and build things. <br/>I am currently pursuing my B.Tech in Computer Science and Engineering from IIIT Delhi. I am passionate about web development and have experience in building web applications using React, Next.js, and Tailwind CSS. I am also interested in competitive programming and have a good understanding of data structures and algorithms. I am always eager to learn new technologies and improve my skills. I am looking for opportunities where I can apply my skills and contribute to the growth of the organization.
                </p>
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

