import { grid_items } from "@/data";
import { BentoGrid } from "./ui/BentoGrid";
import { BentoGridItem } from "./ui/BentoGridItem";

const Grid = () => {
  return (
    <section id="contact" className="dark:bg-black h-fit bg-white">
      <BentoGrid className="max-w-6xl h-fit p-2 mx-auto">
        {grid_items.map((item, i, row) => (
          <BentoGridItem
            id={i}
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={
              !(i + 1 === row.length)
                ? i === 3
                  ? "md:col-span-2"
                  : ""
                : "md:col-span-3 col-span-1"
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
