import { grid_items } from "@/data";
import dynamic from "next/dynamic";
import { BentoGrid } from "./ui/BentoGrid";

const BentoGridItem = dynamic(
  () => import("./ui/BentoGridItem").then((m) => m.BentoGridItem),
  { ssr: false }
);

const Grid = () => {
  return (
    <section id="contact" className="dark:bg-black h-fit bg-white">
      <h1 className="heading text-center py-20 dark:text-white text-black font-bold text-[40px] lg:text-6xl md:text-5xl">
        A general scene about {""}
        <span className="text-purple-400">What I Do</span>
      </h1>
      <BentoGrid className="max-w-[1200px] h-fit p-2 mx-auto">
        {grid_items.map((item, i, row) => (
          <BentoGridItem
            id={i}
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={
              !(i + 1 === row.length)
                ? "lg:col-span-2 col-span-1"
                : "md:col-span-4 col-span-1 !mt-0"
            }
            img={item.img}
            spareImg={item.spareImg}
            spareImgClassName={item.spareImgClassName}
            imgClassName={item.imgClassName}
            bgImage={item.bgImage}
            titleClassName={item.titleClassName}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
