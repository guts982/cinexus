"use client";
import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import Link from "next/link";

const links = [
  {
    name: "Home",
    path: "/",
    auth: "neutral", //required, not-required, neutral
  },
  {
    name: "About",
    path: "/about",
    auth: "neutral", //required, not-required, neutral
  },
  {
    name: "About",
    path: "/about",
    auth: "neutral", //required, not-required, neutral
  },
  {
    name: "About",
    path: "/about",
    auth: "neutral", //required, not-required, neutral
  },
  {
    name: "About",
    path: "/about",
    auth: "neutral", //required, not-required, neutral
  },
  {
    name: "About",
    path: "/about",
    auth: "neutral", //required, not-required, neutral
  },
  {
    name: "About",
    path: "/about",
    auth: "neutral", //required, not-required, neutral
  },
  {
    name: "About",
    path: "/about",
    auth: "neutral", //required, not-required, neutral
  },
  {
    name: "About",
    path: "/about",
    auth: "neutral", //required, not-required, neutral
  },
  {
    name: "About",
    path: "/about",
    auth: "neutral", //required, not-required, neutral
  },
  {
    name: "About",
    path: "/about",
    auth: "neutral", //required, not-required, neutral
  },
  {
    name: "About",
    path: "/about",
    auth: "neutral", //required, not-required, neutral
  },
  {
    name: "About",
    path: "/about",
    auth: "neutral", //required, not-required, neutral
  },
  {
    name: "About",
    path: "/about",
    auth: "neutral", //required, not-required, neutral
  },
];

const NavLinks = () => {
  return (
    <>
      {links.map((link,i) => (
        <NavigationMenuItem key={link.name+i}>
          <Link href={link.path} legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              {link.name}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      ))}
    </>
  );
};

export default NavLinks;
