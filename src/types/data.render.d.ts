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
    titleClasName?: string;
  }
  interface NavItem {
    name: string;
    link: string;
    icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  }
}
