import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import NavbarFloating from "@/components/NavbarFloating";
import PinProjects from "@/components/PinProjects";
import Button from "@/components/ui/Button";
import { BackgroundGradientAnimation } from "@/components/ui/GradientBackGround";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import { FaLocationArrow } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="relative bg-black">
      <NavbarFloating />
      <Hero />
      <div className="h-[50rem] w-full dark:bg-black dark:bg-grid-white/[0.2] bg-black bg-grid-black/[0.2] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          Backgrounds
        </p>
      </div>
      <Grid />
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <TextGenerateEffect
            className="text-center "
            words={"My Frontend Portfolio to show me to the whole world"}
          />
        </div>
        <Button content="To my work" icon={FaLocationArrow} />
      </BackgroundGradientAnimation>
      <PinProjects />
    </main>
  );
}
