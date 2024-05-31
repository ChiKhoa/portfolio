"use client";

import { ElementRef, useEffect, useRef } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useTransformToCodeView } from "@/hooks/use-transform-to-code-view";

interface SectionTechProps {
  children: React.ReactNode;
  packageJSON: object;
}

export const SectionTech = ({ children, packageJSON }: SectionTechProps) => {
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
        {children}
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
