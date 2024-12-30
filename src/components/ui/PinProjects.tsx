import Image from "next/image";
import { PinContainer } from "./PinContainer";

const PinProjects = ({
  description,
  // github,
  // id,
  image,
  // stack,
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
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500">{description}</span>
          </div>
          <Image
            quality={100}
            width={200}
            height={200}
            src={image}
            alt={title}
            className="flex-auto m-auto h-full w-full object-cover object-center"
          />
        </div>
      </PinContainer>
    </div>
  );
};

export default PinProjects;
