import { education_data } from "@/data/education-data";
import Image from "next/image";
import { Button } from "./ui/MovingBorderButton";

const Education = () => {
  return (
    <div className="py-20 w-full px-5 lg:w-[850px]" id="education">
      <h1 className="heading text-center dark:text-white text-black font-bold text-[40px] lg:text-6xl md:text-5xl">
        My {""}
        <span className="text-purple-400">Education</span>
      </h1>
      <div className="grid-cols-1 mt-12 grid lg:grid-cols-2 flex-wrap justify-center gap-10">
        {/* Add your educations here */}
        {education_data.map((exp) => {
          return (
            <Button
              key={exp.id}
              borderRadius="1.75rem"
              duration={Math.floor(Math.random() * 10000 + 10000)}
              className="flex-1 flex-col text-white border-neutral-200 dark:border-slate-800"
            >
              <div className="flex w-full lg:flex-row justify-between lg:items-center p-3 md:p-5 py-6 lg:p-10 gap-2">
                <div className="flex gap-3">
                  <Image
                    src={exp.logo}
                    alt="Logo"
                    height={50}
                    width={50}
                    className="rounded-full !h-[50px] object-cover bg-white border"
                  />
                  <div className="flex justify-center items-start flex-col">
                    <h2
                      className="sm:text-lg text-base font-bold"
                      style={{
                        lineHeight: "22px",
                      }}
                    >
                      {exp.company}
                    </h2>
                    <p className="italic">
                      {exp.startDate} - {exp.endDate}
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-start flex-col">
                  <h3
                    className="sm:text-lg text-base font-bold"
                    style={{
                      lineHeight: "22px",
                    }}
                  >
                    Specialization:
                  </h3>
                  <p className="italic">{exp.specialized}</p>
                </div>
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
