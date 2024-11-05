


import Image from "next/image";

import TextRevealByWord from "@/components/ui/text-reveal";
export default function PortfolioHome() {
    return (
        <div className=" font-raleway w-full mb-20">
            <div className=" flex flex-col  items-center">

                <TextRevealByWord text="Project Terbaru" />
                <div className=" flex  gap-5 justify-between w-full    max-h-screen   " >
                    {/* <Image src={'/porto/nezztar.png'} alt="nezztar" width={2000} height={1000} className="h-max w-full right-[100px]    rounded-xl object-cover" /> */}
                    <Image src={'/porto/thumbnail_1.jpg'} alt="nezztar" width={2000} height={1000} className="w-1/2 self-center h-[600px]   right-4  rounded-xl object-cover" />
                    <div className="flex flex-col items-end h-full">
                        <p className="text-black font-raleway font-bold text-4xl w-3/4">Nezztar, sebuah aplikasi rental property</p>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>


    )
}