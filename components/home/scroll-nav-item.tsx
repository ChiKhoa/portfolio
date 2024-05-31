"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { SectionType } from "./header";

interface ScrollNavigationItemProps {
  index: number;
  item: SectionType;
}

export const ScrollNavigationItem = ({
  index,
  item,
}: ScrollNavigationItemProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const handleScroll = () => {
      if (window.scrollY > 60) {
        target.style.right = "60px";
      } else target.style.right = "0";
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      ref={ref}
      className="group absolute w-fit transition-all"
      style={{
        top: `${50 * index}px`,
        transitionDelay: `${50 * index}ms`,
        transitionProperty: "right",
      }}
    >
      <Link
        href={item.href}
        className=" size-10 flex items-center justify-center rounded-full bg-neutral-800/75 hover:bg-neutral-700/75"
      >
        <item.Icon className="size-6" />
      </Link>
      <p className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-[calc(100%+6px)] text-nowrap text-sm text-highlight">
        {item.text}
      </p>
    </div>
  );
};
