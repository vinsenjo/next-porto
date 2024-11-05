import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

export default function FooterPorto() {
    return (
        <div className="flex flex-col justify-between  py-5 mt-5 lg:py-10 px-2 lg:px-10 gap-10 text-white">
            <p className="text-base lg:text-xl lg:w-1/2">Terima kasih telah mengunjungi portofolio saya. Saya berharap kita dapat bekerja sama. Jangan ragu untuk menghubungi saya di social media saya atau melalui email saya, vinjovinda@gmail.com .</p>

            <p className="text-sm">© Vinsensius Jovinda 2024</p>

        </div>
    )
}