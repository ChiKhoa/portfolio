"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { GrTechnology } from "react-icons/gr";
import { GoProjectTemplate } from "react-icons/go";
import { RiHome3Line } from "react-icons/ri";
import { RiContactsBook2Line } from "react-icons/ri";
import { ScrollNavigationItem } from "./scroll-nav-item";
import { IconType } from "react-icons";

export type SectionType = {
  text: string;
  href: string;
  Icon: IconType;
};

const sections = [
  {
    text: "About me",
    href: "#about",
    Icon: RiHome3Line,
  },
  {
    text: "Skills",
    href: "#skills",
    Icon: GrTechnology,
  },
  {
    text: "Project",
    href: "#projects",
    Icon: GoProjectTemplate,
  },
  {
    text: "Contact",
    href: "#contact",
    Icon: RiContactsBook2Line,
  },
];

export const Header = () => {
  return (
    <>
      <div className="h-14 flex items-center justify-center">
        {sections.map((item, index) => (
          <Button key={index} variant="link" asChild>
            <Link href={item.href}>{item.text}</Link>
          </Button>
        ))}
      </div>
      <div className="fixed top-1/2 -translate-y-1/2 left-full bg-red-500 w-10 h-[190px] z-50">
        {sections.map((item, index) => (
          <ScrollNavigationItem key={index} index={index} item={item} />
        ))}
      </div>
    </>
  );
};
