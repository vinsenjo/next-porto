import TypingAnimation from "@/components/ui/typing-animation";

export default function PortoHero() {
    return (
        <div className="mt-32  relative lg:h-screen  w-full overflow-hidden">
            <div className="absolute inset-0  lg:flex top-10 lg:items-center justify-center z-10  w-screen-xl">
                <TypingAnimation text="Portfolio" className="text-white text-5xl lg:text-[150px] font-sans font-bold" />
            </div>
            <div className=" opacity-40  w-screen-xl w-full h-full overflow-hidden">
                <video

                    autoPlay
                    loop
                    muted
                    playsInline

                    className="rounded-lg shadow-lg">
                    <source src="/porto_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    )
}