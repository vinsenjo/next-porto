'use client'
import { FaLinkedin, FaGithub, FaNode, FaReact } from "react-icons/fa";
import { RiInstagramFill, RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import PortoHero from "./hero";
import PortoBody from "./porto";
import { Dock, DockIcon } from "@/components/ui/dock";
import Link from "next/link";
import { BiLogoTypescript } from "react-icons/bi";
import { SiNextdotjs, SiExpress, SiMysql, SiPrisma, SiPostman } from "react-icons/si";
import Marquee from "@/components/ui/marquee";

export default function Index() {
    const icons = [
        <FaReact key={1}/>, <RiTailwindCssFill key={2}/>, <SiNextdotjs key={3}/>, , <RiJavascriptFill key={4}/>, <FaNode key={5}/>,
        <SiExpress key={6}/>, <BiLogoTypescript key={7}/>, <FaGithub  key={8}/>, <SiMysql key={9}/>, <SiPrisma key={10}/>, <SiPostman key={11}/>

    ];


    return (
        <div className="relative overflow-hidden">
            <PortoHero />
                <Marquee pauseOnHover className="py-5 lg:py-0  [--duration:20s] ">
                    <div className="flex gap-5 text-white w-full text-5xl ">
                        {icons.map((icon, index) => (
                            <div key={index} className="text-merah">
                                {icon}
                            </div>
                        ))}
                    </div>
                </Marquee>

            <div className="flex flex-col items-center py-5 lg:py-20">
                <PortoBody />
            </div>
            <div className={`fixed  bottom-5  flex justify-end pr-5 w-full z-50 text-xl lg:text-2xl text-white `}>
                <div className="relative ">
                    <Dock direction="middle" className=" right-40 shadow-lg">
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

        </div>
    )
}