
import About from "../../_components/about";
import Navbar from "../../_components/navbar";
import PortoHero from "./_components/hero";
import { Metadata } from "next";
import PortoBody from "./_components/porto";
import { Dock, DockIcon } from "@/components/ui/dock";
import { Link } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import Index from "./_components/portoBody";
import FooterPorto from "./_components/footer";

export const metadata: Metadata = {
    title: "Vinsen Porto",
    description: "Vinsensius Jovinda Portfolio",
};

export default function Portfolio() {
    return (
        <div className=" overflow-hidden ">
            <Navbar />
            <div className="relative font-raleway tracking-widest">
                <Index />
            </div>
            <FooterPorto />
        </div>
    )
}