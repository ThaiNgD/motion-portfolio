import { project_data } from "@/data";
import PinProjects from "./ui/PinProjects";

const RecentProjects = () => {
  return (
    <section className="py-20" id="project">
      <h1 className="heading text-center dark:text-white text-black font-bold text-[40px] lg:text-6xl md:text-5xl">
        A small selection of {""}
        <span className="text-purple-400">Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {project_data.map((project, id) => {
          return (
            <PinProjects
              key={id}
              description={project.description}
              title={project.title}
              id={project.id}
              image={project.image}
              github={project.github}
              stack={project.stack}
              url={project.url}
            />
          );
        })}
      </div>
    </section>
  );
};

export default RecentProjects;
