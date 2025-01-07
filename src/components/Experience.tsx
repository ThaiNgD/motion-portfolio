import { experience_data } from "@/data/experience-data";
import { Button } from "./ui/MovingBorderButton";

const Experience = () => {
  return (
    <div className="py-20" id="experience">
      <h1 className="heading text-center dark:text-white text-black font-bold text-[40px] lg:text-6xl md:text-5xl">
        My {""}
        <span className="text-purple-400">Experience</span>
      </h1>
      <div className="grid-cols-1 mt-12 grid lg:grid-cols-2 flex-wrap justify-center gap-10">
        {/* Add your experiences here */}
        {experience_data.map((exp) => {
          return (
            <Button
              key={exp.id}
              borderRadius="1.75rem"
              duration={Math.floor(Math.random() * 10000 + 10000)}
              className="flex-1 text-white border-neutral-200 dark:border-slate-800"
            >
              <div className="flex lg:flex-row lg:items-center p-3 md:p-5 py-6 lg:p-10 flex-col gap-2">
                <h2 className="text-lg font-bold">{exp.company}</h2>
                <p>{exp.position}</p>
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
