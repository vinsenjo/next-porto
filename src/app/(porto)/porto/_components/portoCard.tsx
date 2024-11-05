import Image from "next/image"
import Link from "next/link"
export interface IPorto {
    imgSrc: string
    title: string
    caption: string
    tech: string[]
    link: string
}


export default function PortoCard({ link, imgSrc, tech, title, caption }: IPorto) {
    return (
        <Link href={link} target="_blank" className="flex flex-col group  gap-4 w-full">
            <div className="group-hover:scale-95 relative  overflow-hidden duration-500">
                <Image src={imgSrc} alt="porto card" width={1000} height={1000} className=" object-cover duration-500 hover:shadow-lg group-hover:opacity-70 group-hover:scale-110" />
                <div className="group flex flex-col items-start p-6   left-0 top-0 group-hover:bg-black/60 absolute w-full duration-300 bg-black/0  h-full ">
                    <p className="duration-300 group-hover:opacity-100  opacity-0 text-wrap w-2/3">Dibuat dengan : </p>
                    <div className="flex gap-1 flex-wrap text-sm duration-300 group-hover:opacity-100  opacity-0 text-wrap ">{tech.map((tech, techIndex) => (
                        <p key={techIndex} className="inline-block bg-gray-200 text-gray-800 rounded-full px-2  py-1 text-xs mr-2">
                            {tech}
                        </p>
                    ))}</div>
                </div>
            </div>
            <div className="flex flex-col items-center gap-2">
                <p className="text-sm text-gray-400">{caption}</p>
                <p className="text-lg font-semibold">{title}</p>
            </div>
        </Link>
    )
}