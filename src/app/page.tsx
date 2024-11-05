import Image from "next/image";
import Navbar from "./_components/navbar";
import Hero from "./_components/hero";
import About from "./_components/about";
import { Metadata } from "next";
import PortfolioHome from "./_components/portoHome";
import Body from "./_components/body";
import ContactHome from "./_components/contact";
import Footer from "./_components/footer";

export const metadata: Metadata = {
  title: "About Vinsen",
  description: "Learn more about Vinsensius Jovinda.",
};


export default function Home() {
  return (
    <div className="lg:lg:w-[1200px] ">
      <Navbar />
      {/* BODY */}
      <div className=" lg:lg:w-[1200px] px-2">
        <Body />
        <ContactHome />
      </div>
      <Footer />
    </div>

  );
}

