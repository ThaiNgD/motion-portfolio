"use client";

import { nav_items } from "@/data";
import { FloatingNav } from "./ui/FloatingNavbar";

const NavbarFloating = () => {
  return (
    <>
      <FloatingNav navItems={nav_items} />
    </>
  );
};

export default NavbarFloating;
