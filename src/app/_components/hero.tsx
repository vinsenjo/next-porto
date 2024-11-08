'use client'
import BlurFade from "@/components/ui/blur-fade";

export default function Hero() {
    return (
        <div className="flex flex-col justify-start pt-36 h-screen gap-2 lg:gap-5 lg:px-40  lg:lg:w-[1200px]">
            <BlurFade delay={0.25} inView>


                <h1 className="text-4xl lg:text-6xl font-roboto font-light">Vinsensius Jovinda - <br /> <span className="font-normal">Website Developer</span> </h1>
                <p className="text-xl lg:text-2xl text-abu">Enthusiastic Developer committed to continuous growth, passionate about creating meaningful experiences through innovative web applications.</p>
            </BlurFade>

        </div>
    )
}