"use client";

import { useViewFullScreen } from "@/hooks/use-view-full-screen";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect } from "react";

export const ViewFullScreen = () => {
  const viewFullScreen = useViewFullScreen();

  useEffect(() => {
    if (!viewFullScreen.isOpen) return;

    const handle = (e: KeyboardEvent) => {
      if (e.code === "ArrowRight") {
        const index = viewFullScreen.imageQueue.findIndex((image) => {
          return viewFullScreen.currentImage!.path === image.path;
        });
        if (index < viewFullScreen.imageQueue.length - 1)
          viewFullScreen.setCurrentImage(viewFullScreen.imageQueue[index + 1]);
      }
      if (e.code === "ArrowLeft") {
        const index = viewFullScreen.imageQueue.findIndex((image) => {
          return viewFullScreen.currentImage!.path === image.path;
        });
        if (index > 0)
          viewFullScreen.setCurrentImage(viewFullScreen.imageQueue[index - 1]);
      }
      if (e.code === "Escape") {
        viewFullScreen.onClose();
      }
    };

    window.addEventListener("keydown", handle);

    return () => {
      window.removeEventListener("keydown", handle);
    };
  }, [viewFullScreen]);

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 bottom-0 bg-slate-900/80 sm:bg-slate-900/70 z-[60]",
        // viewFullScreen.imageQueue.length === 0 && "p-4",
        viewFullScreen.isOpen ? "flex flex-col" : "hidden"
      )}
    >
      {viewFullScreen.currentImage && (
        <div className="relative w-full h-full flex items-center justify-center">
          <Image
            src={viewFullScreen.currentImage.path}
            alt=""
            fill
            sizes="full"
            className="peer object-contain"
          />
          <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center p-3 bg-neutral-950/80 peer-hover:opacity-0 truncate text-highlight">
            {viewFullScreen.currentImage.title}
          </div>
          <div
            className="fixed top-3 right-3 lg:top-5 lg:right-5 p-2 bg-rose-600/90 hover:bg-rose-600 rounded-full cursor-pointer shadow-lg opacity-75 hover:opacity-100"
            onClick={viewFullScreen.onClose}
          >
            <IoCloseSharp className="w-7 h-7 text-stone-300" />
          </div>
        </div>
      )}
      {viewFullScreen.imageQueue.length > 1 && (
        <ScrollArea className="shrink-0 w-screen">
          <div className="flex flex-row gap-3 p-2 lg:p-3 bg-slate-900/95 sm:bg-slate-900/90">
            {viewFullScreen.imageQueue.map((image, index) => (
              <div
                key={index}
                className={cn(
                  "relative aspect-video w-28 lg:w-32 rounded-md overflow-hidden border border-transparent cursor-pointer",
                  image === viewFullScreen.currentImage
                    ? "border-2 border-neutral-400"
                    : "hover:border-neutral-400"
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  viewFullScreen.setCurrentImage(image);
                }}
              >
                <Image
                  src={image.path}
                  alt={image.title}
                  fill
                  sizes="full"
                  className="object-cover bg-neutral-800"
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
