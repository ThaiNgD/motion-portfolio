export {};
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
    image?: string | StaticImport;
    github?: string;
    gitlab?: string;
    stack: string[];
  }
}
