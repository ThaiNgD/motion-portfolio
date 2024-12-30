import AboutMe from "@/components/AboutMe";
import DarkLightMode from "@/components/DarkLightMode";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import NavbarFloating from "@/components/NavbarFloating";
import PinProjects from "@/components/PinProjects";
import Href from "@/components/ui/Href";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="relative dark:bg-white bg-black" suppressHydrationWarning>
      <NavbarFloating />
      <DarkLightMode />
      <div className="w-full dark:bg-black dark:bg-grid-white/[0.05] bg-white bg-grid-black/[0.05] md:bg-grid-black/[0.02] relative flex flex-col items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="flex min-h-screen h-fit flex-col items-center justify-center">
          <Hero />
          <div className="z-[99] w-[80vw] flex-col inset-0 flex items-center justify-center gap-3 text-white font-bold px-4  text-3xl text-center md:text-4xl lg:text-7xl">
            <div className="max-w-[89vw]">
              <h2 className="uppercase tracking-widest text-[8px] md:text-xs  text-center text-dark dark:text-blue-100 max-w-[80vw]">
                Hi, I&#39;m Dinh Thai Nguyen. Talented Frontend Developer
                <span className="text-blue-500 dark:text-purple-400">
                  (at least in my thought :)) )
                </span>
                , in my way to become Frontend Master
              </h2>
            </div>
            <TextGenerateEffect
              className="text-center"
              words={"My Frontend Portfolio introducing me to the whole world "}
            />
            <div className="max-w-[89vw]">
              <h2 className="uppercase tracking-widest text-xs text-center text-dark dark:text-blue-100 max-w-[80vw]">
                My recent projects showcasing my skills and experiences. &#9918;
                &#9918; &#9918;
              </h2>
            </div>
            <Href
              content="Discover me"
              btnClassName="mt-4 z-[100]"
              icon={FaLocationArrow}
              href="#about"
            />
          </div>
        </div>
        <Grid />
        <AboutMe />
        <PinProjects />
      </div>
    </main>
  );
}
