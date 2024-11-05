'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const router = usePathname()
    const text =
        router === "/porto" ? "text-white lg:px-10 px-2 lg:w-full" : "text-black lg:w-[1200px] lg:px-0";
    return (
        <div className={`${text} flex justify-between text-xl lg:text-2xl py-10 font-roboto fixed top-0   px-2 w-screen   z-40`}>
            <Link href={'/'} className="lg:text-2xl text-shadow-md hover:text-shadow-lg duration-300">Vinsen Jovin</Link>
            <div className="flex gap-4 ">
                <Link href={'/'} className={` duration-150  after:content-[''] ${router == "/porto" ? "after:bg-cream block" : "after:bg-black hidden"} after:bg-black  relative  after:h-[3px] after:w-0 hover:after:w-full after:duration-500 after:rounded-xl after:absolute after:left-0 after:-bottom-[2px]`}>Tentang Saya</Link>
                <Link href={'/porto'} className={`duration-150  after:content-[''] ${router == "/porto" ? "after:bg-cream hidden" : " after:bg-black block"} after:bg-black  relative  after:h-[3px] after:w-0 hover:after:w-full after:duration-500 after:rounded-xl after:absolute after:left-0 after:-bottom-[2px]`}>Portfolio</Link>

            </div>
        </div>
    )
}