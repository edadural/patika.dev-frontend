import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
} from "@heroui/navbar";
import NextLink from "next/link";

import img from "@/public/favicon.png";

export const Navbar = () => {
  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-2" href="/">
            <img src={img.src} alt="Logo" className="w-8 h-8" />
            <span className="font-medium text-inherit">Notes App</span>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>
    </HeroUINavbar>
  );
};
