
import Navbar from "../../_components/navbar";
import { Metadata } from "next";
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