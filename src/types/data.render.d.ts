export {};
declare global {
  interface GridItem {
    title: string;
    description: string;
    header: () => JSX.Element;
    icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
    className?: string;
    imgClassName?: string;
    img?: string;
    bgImage?: string;
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
    src: string;
  }
}
