'use client'
import { Dock, DockIcon } from "@/components/ui/dock";
import { FaLinkedin } from "react-icons/fa";
import About from "./about";
import Hero from "./hero";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Link from "next/link";


export default function Body() {

    return (
        <div className="relative">
            <div>
                <div className={`sticky lg:lg:w-[1200px] top-[83%] z-30 flex justify-end lg:lg:px-40 text-xl lg:text-2xl text-black p-4`}>
                    <div className="relative ">
                        <Dock direction="middle" className="right-40 shadow-lg  ">
                            <DockIcon>
                                <Link href={'https://www.linkedin.com/in/vinsensius-jovinda/'} target="_blank">
                                    <FaLinkedin />
                                </Link>
                            </DockIcon>
                            <DockIcon>
                                <Link href={'https://github.com/vinsenjo'} target="_blank">
                                    <FaGithub />
                                </Link>
                            </DockIcon>
                            <DockIcon>
                                <Link href={'https://www.instagram.com/vinsenjovin/'} target="_blank">
                                    <RiInstagramFill />
                                </Link>
                            </DockIcon>
                        </Dock>
                    </div>
                </div>
                <Hero />
                <About />


            </div>
        </div>
    )
}