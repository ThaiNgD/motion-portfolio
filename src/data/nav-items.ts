import {
  IconCapProjecting,
  IconHome,
  IconMessage,
  IconUser,
} from "@tabler/icons-react";

export const nav_items: NavItem[] = [
  {
    name: "Home",
    link: "/",
    icon: IconHome,
  },
  {
    name: "About",
    link: "#about",
    icon: IconUser,
  },
  {
    name: "Contact",
    link: "#contact",
    icon: IconMessage,
  },
  {
    name: "Project",
    link: "#project",
    icon: IconCapProjecting,
  },
];
