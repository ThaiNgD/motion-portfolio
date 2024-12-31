import { stack_icon } from "@/data";
import Image from "next/image";
import { PinContainer } from "./PinContainer";

const PinProjects = ({
  description,
  // github,
  // id,
  image,
  stack,
  title,
  url,
}: ProjectItem) => {
  return (
    <div className="lg:min-h-[32.5rem] sm:w-96 w-[80vw] flex items-center justify-center ">
      <PinContainer title={url} href={url}>
        <div className="flex basis-full relative flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 sm:w-96 w-[80vw] min-h-[325px] gap-3">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            {title}
          </h3>
          <div className="text-base !m-0 !p-0 min-h-[150px] font-normal">
            <span className="text-slate-500">{description}</span>
          </div>
          <Image
            quality={100}
            width={500}
            height={500}
            src={image}
            alt={title}
            className="flex-auto m-auto h-[175px] w-full object-cover object-center"
          />
          <div className="flex justify-between">
            <div className="flex gap-[2px]">
              {stack.map((item, index) => {
                const TechIcon = stack_icon[item];
                return (
                  <div className="p-2 rounded-full !h-fit bg-white" key={index}>
                    <TechIcon size={16} className="text-black" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </PinContainer>
    </div>
  );
};

export default PinProjects;
