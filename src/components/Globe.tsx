import { globeConfig, sampleArcs } from "@/data/globe-data";
import dynamic from "next/dynamic";

const World = dynamic(() => import("./ui/GridGlobe").then((m) => m.World), {
  ssr: false,
});
const Globe = () => {
  return <World data={sampleArcs} globeConfig={globeConfig} />;
};

export default Globe;
