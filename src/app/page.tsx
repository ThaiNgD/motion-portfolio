import AboutMe from "@/components/AboutMe";
import { Approach } from "@/components/Approach";
import DarkLightMode from "@/components/DarkLightMode";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import NavbarFloating from "@/components/NavbarFloating";
import RecentProjects from "@/components/RecentProjects";
import Testimonial from "@/components/Testimonial";
import Href from "@/components/ui/Href";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa6";

export default function Home() {
  return (
    <main
      className="relative overflow-x-hidden flex justify-center items-center flex-col mx-auto overflow-clip dark:bg-white bg-black"
      suppressHydrationWarning
    >
      {/* <ClockRealtime /> */}
      <NavbarFloating />
      <DarkLightMode />
      <div className="w-full dark:bg-black dark:bg-grid-white/[0.05] bg-white bg-grid-black/[0.05] md:bg-grid-black/[0.02] relative flex flex-col items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <div className="flex min-h-screen h-fit flex-col items-center justify-center">
          <Hero />
          <div className="z-[99] w-[60vw] flex-col inset-0 flex items-center justify-center gap-3 text-white font-bold px-4  text-3xl text-center md:text-4xl lg:text-7xl">
            <TextGenerateEffect
              className="text-center whitespace-pre-line"
              words={`Hi, I'm Dinh Thai Nguyen - talented Frontend Developer. In my way to become Frontend Master
                `}
            />
            <Href
              content="Discover me"
              btnClassName="mt-4 z-[100]"
              icon={FaLocationArrow}
              href="#about"
            />
          </div>
        </div>
        <Grid />
        <Education />
        <Experience />
        <RecentProjects />
        <AboutMe />
        <Testimonial />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
