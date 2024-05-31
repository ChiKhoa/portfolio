"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { IoCloseOutline } from "react-icons/io5";
import { projectsData } from "@/data/dataProjects";
import { LuCopyright } from "react-icons/lu";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className="text-neutral-800">
      <button
        onClick={toggleOpen}
        className={cn(
          "fixed top-[25px] right-[25px] w-[50px] h-[50px] rounded-full z-50 flex items-center justify-center"
        )}
      >
        {isOpen ? (
          <IoCloseOutline className="w-10 h-10" />
        ) : (
          <Image
            src="/logo.png"
            alt="logo"
            className="object-cover"
            fill
            sizes="full"
          />
        )}
      </button>
      <div
        style={
          isOpen
            ? {
                clipPath: "circle(calc(100vh + 300px) at 350px 50px)",
                transition: "clip-path ease-in 0.5s",
              }
            : {
                clipPath: "circle(10px at 350px 50px)",
                transition: "clip-path ease-in-out 0.3s",
              }
        }
        className="fixed top-0 bottom-0 right-0 w-[400px] bg-neutral-300 z-[49]"
      >
        <div className="h-full flex flex-col justify-between pt-28">
          <div className="flex flex-col items-center justify-center gap-y-5">
            <Link
              href={"/"}
              className="text-2xl hover:underline"
              onClick={toggleOpen}
            >
              Home
            </Link>
            <div className="w-3/4 h-[2px] bg-neutral-500"></div>
            {projectsData.map((pro, index) => (
              <Link
                key={index}
                href={pro.href}
                className="text-2xl hover:underline"
                onClick={toggleOpen}
              >
                {pro.title}
              </Link>
            ))}
          </div>
          <div className="flex items-center justify-center m-4 gap-2 text-sm font-medium">
            <LuCopyright className="size-4" />
            <span>2024</span>
            <span>SunnyBiolie - Khoa Phạm</span>
          </div>
        </div>
      </div>
      <div
        className={cn(
          isOpen ? "fixed top-0 right-0 bottom-0 left-0 z-[48]" : "hidden"
        )}
        onClick={toggleOpen}
      />
    </div>
  );
};
