
import Navbar from "./_components/navbar";

import { Metadata } from "next";

import Body from "./_components/body";
import ContactHome from "./_components/contact";
import Footer from "./_components/footer";
import BlurFade from "@/components/ui/blur-fade";

export const metadata: Metadata = {
  title: "Vinsen Jovin",
  description: "Learn more about Vinsensius Jovinda.",
};


export default function Home() {
  return (
    <div className="lg:lg:w-[1200px] ">
      <Navbar />
      {/* BODY */}
      <div className=" lg:lg:w-[1200px] px-2">

        <Body />
        <BlurFade delay={0.25} inView>
          <ContactHome />
        </BlurFade>
      </div>
      <Footer />
    </div>

  );
}

