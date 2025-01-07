import { testimonials } from "@/data";
import { AnimatedTestimonials } from "./ui/AnimatedTestimonial";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="min-h-screen h-fit flex flex-col items-center justify-center"
    >
      <TextGenerateEffect
        className="text-center"
        words={"A Passionate Explorer of Life and Ideas"}
      />
      <AnimatedTestimonials testimonials={testimonials} />
    </section>
  );
};

export default AboutMe;
