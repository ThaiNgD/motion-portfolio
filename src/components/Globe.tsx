"use client";
import { globeConfig, sampleArcs } from "@/data/globe-data";
import dynamic from "next/dynamic";

const World = dynamic(() => import("./ui/Globe").then((m) => m.World), {
  ssr: false,
});
const Globe = () => {
  return (
    <div className="flex flex-row items-center justify-center !mt-0 md:h-auto dark:bg-black bg-white relative w-full">
      <div className="max-w-7xl mx-auto w-full relative overflow-hidden md:h-[40rem] h-96">
        <div className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
        <div className="absolute w-full h-72 md:h-full z-10">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
    </div>
  );
};

export default Globe;
