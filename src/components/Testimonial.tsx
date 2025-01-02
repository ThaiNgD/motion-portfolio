import { testimonial_cards } from "@/data";
import { InfiniteMovingCards } from "./ui/InfinityMovingCards";

const Testimonial = () => {
  return (
    <div
      id="testomonials"
      className="h-[40rem] rounded-md flex flex-col antialiased   items-center justify-center gap-10 relative overflow-hidden"
    >
      <h1 className="heading text-center dark:text-white text-black font-bold text-[40px] lg:text-6xl md:text-5xl">
        Some kind of my CTO {""}
        <span className="text-purple-400">Feedback</span>
      </h1>
      <InfiniteMovingCards
        items={testimonial_cards}
        direction="right"
        speed="normal"
      />
    </div>
  );
};

export default Testimonial;
