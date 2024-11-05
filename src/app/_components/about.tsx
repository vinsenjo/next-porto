'use client'
import TextRevealByWord from "@/components/ui/text-reveal";

import WordRotate from "@/components/ui/word-rotate";
import Image from "next/image";


import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import BlurFade from "@/components/ui/blur-fade";



export default function About() {

    const icons = [
        <FaReact key={1} />, <RiTailwindCssFill key={2} />, <SiNextdotjs key={3} />, , <RiJavascriptFill key={4} />, <FaNode key={5} />,
        <SiExpress key={6} />, <BiLogoTypescript key={7} />, <FaGithub key={8} />, <SiMysql key={9} />, <SiPrisma key={10} />, <SiPostman key={11} />

    ];




    return (
        <div className="lg:lg:px-40 mb-10 font-raleway text-xl">
            <div className="flex justify-center ">
                <TextRevealByWord className="text-6xl font-roboto"
                    text="Tentang Saya">

                </TextRevealByWord>
            </div>
            <BlurFade delay={0.25} inView>

                <div className="flex flex-col lg:flex-row gap-5 lg:gap-2 justify-between">
                    <Image src={'/profile.png'} alt="profile" width={1200} height={1000} className="shadow-lg lg:shadow-2xl shadow-black self-center w-[500px]  inline-block h-full object-cover "></Image>
                    <div className="text-2xl font-medium">
                        <p className="">Vinsensius Jovinda Priamdoko</p>
                        <p className="text-xl font-normal">14 Mei 1999</p>
                        <p className="font-normal text-xl">Bandung, Indonesia</p>
                        {/* <p>Hiking, Gaming, Coding, Repeat</p> */}
                        <WordRotate
                            className="text-3xl  text-black "
                            words={["Gaming", "Hiking", "Coding", "Repeat"]}
                        />
                    </div>
                </div>
            </BlurFade>

            {/* <Image src={'/story.jpg'} alt="story" width={1400} height={1000} className="" /> */}
            <BlurFade delay={0.25} inView>

                <div className="flex flex-col gap-3  text-lg lg:text-xl font-raleway mt-10 my-5">
                    <p className="indent-8 leading-8 ">
                        Halo, nama saya Vinsensius Jovinda Priamdoko. Saya adalah lulusan dari Universitas Kristen Maranatha Bandung dengan gelar Teknik Komputer, saya awalnya tidak memiliki ketertarikan pada dunia pemrograman. Selama masa kuliah, fokus saya lebih pada kegiatan organisasi kampus, tepatnya di Mahasiswa Pecinta Kelestarian Alam, selain saya dapat menemukan hobi saya untuk menjelajah alam, saya juga mendapatkan banyak pelajaran karena saya sempat menjabat dalam berbagai posisi, termasuk pernah menjabat sebagai ketua organisasi.  Walaupun masih jauh dari kata sempurna dalam memimpin, pengalaman ini mengajarkan pentingnya kerja sama, sosialisasi, dan memahami dinamika dalam berorganisasi.</p>
                    <p className="indent-8 leading-8">
                        Setelah menyelesaikan studi, saya mulai merenungkan masa depan karier dan merasa perlu untuk memanfaatkan ilmu yang telah dipelajari. Saya memutuskan untuk mendalami pemrograman, khususnya pengembangan website, dan akhirnya menemukan hal yang menyenangkan dalam menciptakan program serta melihat hasilnya secara langsung. Untuk meningkatkan keterampilan saya, saya mengikuti bootcamp di Purwadhika selama tiga bulan. Meskipun program tersebut singkat, saya berhasil mengasah keterampilan dalam berbagai bahasa pemrograman dan berbagai tools baru. Saat ini, saya merasa siap menghadapi tantangan baru di dunia digital dan terbuka untuk mempelajari hal-hal baru dalam industri teknologi.
                    </p>
                </div>
            </BlurFade>
            <BlurFade delay={0.25} inView>
                <h2 className="font-roboto text-3xl ">Pendidikan</h2>
                <div className="flex flex-col gap-3 mt-4">
                    <div className="">

                        <p className="font-semibold">Fullstack Website Development</p>
                        <p className="text-lg">Purwadhika Digital Technologi School</p>
                        <p className="text-abu text-base">2024</p>
                    </div>

                    <div className="">
                        <p className="font-semibold">Teknik Komputer</p>
                        <p className="text-lg">Universitas Kristen Maranatha</p>
                        <p className="text-abu text-base">2017-2023</p>
                    </div>

                    <div className="">
                        <p className="font-semibold">Science</p>
                        <p className="text-lg">SMA Santa Maria 3 Cimahi</p>
                        <p className="text-abu text-base">2014-2017</p>
                    </div>
                </div>
            </BlurFade>
            <BlurFade delay={0.25} inView>

                <h2 className="font-roboto text-3xl mt-5">Skill saya saat ini</h2>
                <div className="flex flex-col gap-3 mt-4">
                    <ul className="list-disc  pl-5 flex flex-col gap-2 text-lg">
                        <li>Menguasai JavaScript dan TypeScript.</li>
                        <li>Membangun dan mengimplementasikan desain UI/UX dalam aplikasi web menggunakan Next.js dan React.js.</li>
                        <li>Menciptakan situs web responsif dan fungsional dengan Next.js dan Tailwind CSS.</li>
                        <li>Bekerja dengan framework di sisi server seperti Express.js.</li>
                        <li>Merancang dan menyusun basis data menggunakan DB diagram.</li>
                        <li>Mengimplementasikan basis data dengan MySQL dan Prisma ORM.</li>
                        <li>Menggunakan Git dan Github untuk  <span className="italic"> version control system.</span></li>
                        <li>Akan terus bertambah</li>
                    </ul>
                </div>
            </BlurFade>
            <BlurFade delay={0.25} inView>
                <h2 className="font-roboto text-3xl mt-5">Tools yang saya gunakan</h2>
                <div className="grid grid-cols-3 lg:grid-cols-4 py-7 w-full  text-5xl gap-y-8">
                    {icons.map((item, idx) => (
                        <div key={idx}>
                            {item}
                        </div>
                    ))}

                </div>
            </BlurFade>
        </div>
    );
}
