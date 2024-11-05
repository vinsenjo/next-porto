'use client'
import TextRevealByWord from "@/components/ui/text-reveal";
import ClickToCopy from "./copy";

import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";


export default function ContactHome() {
    return (
        <div className="">
            <div className="flex justify-center">

                <TextRevealByWord className="text-6xl font-roboto"
                    text="Contact Me">
                </TextRevealByWord>
            </div>
            <div className="text-xl font-raleway  lg:w-2/3   flex flex-col justify-center ">
                <p className=" lg:text-2xl mb-4 font-medium">Terima kasih telah mengunjungi website saya!</p>
                <p className="lg:text-xl text-base">Saya selalu tertarik pada proyek baru dan kolaborasi yang menarik. Jika Anda memiliki ide atau tantangan yang membutuhkan solusi kreatif, atau jika Anda ingin bekerja sama dalam proyek jangka panjang, saya dengan senang hati akan mendiskusikannya lebih lanjut.<br /> Jangan ragu untuk menghubungi saya.</p>
                <p className="mt-5 text-base">Klik email untuk menyalin</p>
                <ClickToCopy />
                <div className="flex justify-start  w-full  my-7  gap-4 text-3xl">


                    <Link href={'https://www.linkedin.com/in/vinsensius-jovinda/  '} className="hover:scale-110  duration-300" target="_blank">
                        <FaLinkedin />
                    </Link>

                    <Link href={'https://github.com/vinsenjo  '} className="hover:scale-110  duration-300" target="_blank">
                        <FaGithub />
                    </Link>


                    <Link href={'https://www.instagram.com/vinsenjovin/  '} className="hover:scale-110  duration-300" target="_blank">
                        <RiInstagramFill />
                    </Link>


                </div>
            </div>
        </div>
    )
}