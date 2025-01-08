export {};
import { stack_icon } from "@/data";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
declare global {
  interface GridItem {
    title: string;
    description?: string;
    header?: () => JSX.Element;
    className?: string;
    imgClassName?: string;
    img?: string | StaticImport;
    bgImage?: string | StaticImport;
    spareImg?: string | StaticImport;
    spareImgClassName?: string;
    titleClassName?: string;
  }
  interface NavItem {
    name: string;
    link: string;
    icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  }
  interface TestimonialItem {
    quote: string;
    name: string;
    designation: string;
    src: string | StaticImport;
  }
  interface ProjectItem {
    id: number;
    title: string;
    description?: string;
    url: string;
    image: string | StaticImport;
    github?: string;
    gitlab?: string;
    stack: (keyof typeof stack_icon)[];
  }

  interface SocialItem {
    id: number;
    icon: string | StaticImport;
    href: string;
  }
  interface JobExperience {
    id: number;
    company: string;
    logo: string | StaticImageData; // Assuming MKT is a string representing the logo
    position: string;
    startDate: string; // Format: YYYY-MM
    endDate: string; // Format: YYYY-MM
    achievements: string[];
  }
}
