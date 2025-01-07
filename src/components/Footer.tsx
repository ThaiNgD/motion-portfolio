"use client";
import FooterGrid from "@/assets/svg/footer-grid.svg";
import { social_data } from "@/data";
import animateData from "@/data/sending-mail.json";
import Lottie from "lottie-react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowDown } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";
const Footer = () => {
  return (
    <footer className="w-full mt-[300px] pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-[0px] min-h-96">
        <Image
          src={FooterGrid}
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>
      <Lottie
        className="z-50 absolute right-[calc(50%-200px)] bottom-[400px] !w-[400px] !h-[400px]"
        loop={true}
        autoPlay={true}
        animationData={animateData}
        rendererSettings={{
          preserveAspectRatio: "xMidYMid slice",
        }}
      />
      <div className=" flex flex-col items-center">
        <h1 className="z-50 lg:max-w-[45vw] text-center dark:text-white text-black font-bold text-[40px] lg:text-6xl md:text-5xl">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white z-50 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:dinhthai1905@gmail.com">
          <MagicButton
            iconClass="text-white animate-translateYInfinite"
            icon={FaArrowDown}
            content={"Contact me"}
          />
        </a>
      </div>
      <div className="flex mt-16 gap-2 px-20 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base z-50 dark:text-white text-black text-sm md:font-normal font-light">
          Copyright © 2024 Dinh Thai Nguyen
        </p>

        <div className="flex z-50 items-center md:gap-3 gap-6">
          {social_data.map((profile) => (
            <Link key={profile.id} href={profile.href}>
              <div className="w-10 h-10 cursor-pointer flex justify-center items-center bg-white  saturate-180  rounded-lg border border-black-300">
                <Image src={profile.icon} alt="icons" width={20} height={20} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
