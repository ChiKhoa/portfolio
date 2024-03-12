"use client";

import { ElementRef, useEffect, useRef } from "react";
import Image from "next/image";
import {
  SiNextdotjs,
  SiRemix,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { TechItem } from "../../_components/tech-item";
import { useTransformToCodeView } from "@/hooks/use-transform-to-code-view";
import { images } from "@/assets/index";
import { packageJSON } from "@/data/dataShareStory";

export const Tech = () => {
  const ref = useRef<ElementRef<"div">>(null);
  const html = useTransformToCodeView(packageJSON);

  useEffect(() => {
    ref.current!.innerHTML = html;
  }, [html]);

  return (
    <section className="flex flex-col gap-y-2 mb-10">
      <h3 className="text-highlight underline text-xl font-medium">
        What I Used
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 px-5 sm:px-0">
        <TechItem title="Remix" href="https://remix.run/">
          <SiRemix className="w-full h-full text-black" />
        </TechItem>
        <TechItem title="TypeScript" href="https://www.typescriptlang.org/">
          <SiTypescript className="w-full h-full text-[#3178c6]" />
        </TechItem>
        <TechItem title="Tailwind CSS" href="https://tailwindcss.com/">
          <SiTailwindcss className="w-full h-full text-[#0e9fe1]" />
        </TechItem>
        <TechItem title="Thin Backend" href="https://thin.dev/">
          <Image
            src={images.imgThinBackend}
            alt="Thin Backend"
            className="w-full h-full object-cover"
          />
        </TechItem>
      </div>
      <ScrollArea className="text-code bg-[#292d3e] rounded-md p-4">
        <div className="mb-4 font-medium">package.json</div>
        <div ref={ref} className="whitespace-pre text-sm">
          processing...
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};
