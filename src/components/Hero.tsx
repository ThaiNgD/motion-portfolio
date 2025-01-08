import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <div className="bg-black-90">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-36 md:-top-20 w-[20vw] h-screen"
          fill="white"
        />
        <Spotlight className="top-10 left-0 h-[80vh] w-[50vw]" fill="purple" />
        <Spotlight
          className="top-28 left-[calc(50vw)] h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="top-28 left-[calc(50vw)] h-[80vh] w-[50vw]"
          fill="white"
        />
        <Spotlight
          className="top-50 left-[calc(50vw)] h-[40vh] w-[2vw]"
          fill="blue"
        />
        <Spotlight
          className="top-28 left-[calc(80vw)] h-[60vh] w-[50vw]"
          fill="white"
        />
        <Spotlight
          className="top-28 left-[calc(80vw)] h-[60vh] w-[50vw]"
          fill="blue"
        />
      </div>
    </div>
  );
};

export default Hero;
