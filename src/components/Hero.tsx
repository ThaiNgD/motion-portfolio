import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <div className="pb-20 bg-black-90 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-36 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="top-10 left-50 h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight className="top-28 -left-10 h-[80vh] w-[50vw]" fill="white" />
      </div>
    </div>
  );
};

export default Hero;
