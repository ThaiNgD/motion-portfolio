import { grid_items } from "@/data";
import { BentoGrid } from "./ui/BentoGrid";
import { BentoGridItem } from "./ui/BentoGridItem";

const Grid = () => {
  return (
    <section id="contact" className="dark:bg-black h-fit bg-white">
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
