"use client";

import { useViewFullScreen } from "@/hooks/use-view-full-screen";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { IoCloseSharp } from "react-icons/io5";

export const ViewFullScreen = () => {
  const fullView = useViewFullScreen();

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 bottom-0 bg-slate-900/80 sm:bg-slate-900/70 z-[60]",
        // fullView.imageQueue.length === 0 && "p-4",
        fullView.isOpen ? "flex flex-col" : "hidden"
      )}
    >
      {fullView.currentImage && (
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={fullView.currentImage.path}
            alt=""
            fill
            sizes="full"
            className="peer object-contain"
          />
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center p-3 bg-neutral-950/80 peer-hover:opacity-0 truncate text-highlight">
            {fullView.currentImage.title}
          </div>
          <div
            className="fixed top-3 right-3 lg:top-5 lg:right-5 p-2 bg-rose-600/90 hover:bg-rose-600 rounded-full cursor-pointer shadow-lg opacity-75 hover:opacity-100"
            onClick={fullView.onClose}
          >
            <IoCloseSharp className="w-7 h-7 text-stone-300" />
          </div>
        </div>
      )}
      {fullView.imageQueue.length > 1 && (
        <ScrollArea className="shrink-0 w-screen">
          <div className="flex flex-row gap-3 p-2 lg:p-3 bg-slate-900/95 sm:bg-slate-900/90">
            {fullView.imageQueue.map((image, index) => (
              <div
                key={index}
                className={cn(
                  "relative aspect-video w-28 lg:w-32 rounded-md overflow-hidden border border-transparent cursor-pointer",
                  image === fullView.currentImage
                    ? "border-2 border-neutral-400"
                    : "hover:border-neutral-400"
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  fullView.setCurrentImage(image);
                }}
              >
                <Image
                  src={image.path}
                  alt={image.title}
                  fill
                  sizes="full"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      )}
    </div>
  );
};
