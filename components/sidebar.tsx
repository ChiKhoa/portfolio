"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";

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
        <div className="h-28"></div>
        <div className="flex flex-col items-center justify-center gap-y-5">
          <Link href="/" className="text-2xl hover:underline">
            Home
          </Link>
          <Link href="/" className="text-2xl hover:underline">
            About me
          </Link>
          <Link href="/" className="text-2xl hover:underline">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};
