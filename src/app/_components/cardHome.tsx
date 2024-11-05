import Image from "next/image"

interface IProps {
    id: number
    tittle: string
    caption: string
    image: string
}


export default function PortoCardHome({ id, image, caption, tittle }: IProps) {
    return (
        <div className="">

            <button className={`mb-10 lg:mb-[100px] justify-center flex flex-col items-center group lg:w-max ${id % 2 == 0 ? " lg:relative  lg:top-[300px]" : "mt-0"}`}>
                <div className="overflow-hidden my-2 lg:w-max rounded-3xl group-hover:scale-95 duration-700 ease-out ">

                    <Image width={1000} height={1000} src={image} alt="thumbnail" className="group-hover:scale-110 w-[370px]  lg:w-[530px] lg:h-[600px] object-cover ease-out  duration-700 overflow-hidden rounded-3xl" />
                    <Image width={1000} height={1000} src={'/nezztar.png'} alt="thumbnail" className="group-hover:scale-110 w-[370px]  lg:w-[530px] lg:h-[600px] object-cover ease-out  duration-700 overflow-hidden rounded-3xl" />
                </div>
                <div className="flex lg:mt-4 flex-col text-center">
                    <div className="font-semibold group text-2xl">{tittle}</div>
                    <p className="text-xl font-[350] group text-gray-500">{caption}</p>
                </div>
            </button>
        </div>
    )
}