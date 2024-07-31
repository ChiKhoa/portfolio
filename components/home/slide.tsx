"use client";

import { CSSProperties, ElementRef, useEffect, useRef } from "react";
import { useMouseEnter } from "./slider";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { type Slide as SlideType } from "@/data/dataHomeSlides";

interface SliderItemProps {
  index: number;
  slide: SlideType;
  slides: SlideType[];
  slidesShow: [number, number];
  hoverTranslateZ?: number | string;
  zIndex: number;
  className?: string;
  style?: CSSProperties;
}

export const Slide = ({
  index,
  slide,
  slides,
  slidesShow,
  hoverTranslateZ,
  zIndex,
  className,
  style,
}: SliderItemProps) => {
  const ref = useRef<ElementRef<"div">>(null);
  const [isMouseEnterd] = useMouseEnter();

  useEffect(() => {
    handleAnimations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMouseEnterd, slidesShow]);

  const handleAnimations = () => {
    const target = ref.current;
    if (!target) return;
    if (isMouseEnterd) {
      target.style.transform = `translateZ(${hoverTranslateZ}px)`;
    } else {
      ref.current.style.transform = `translateZ(0px)`;
    }
  };

  return (
    <div
      className={cn(
        slidesShow.includes(index)
          ? "sizes-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          : "hidden"
      )}
      style={{ zIndex }}
    >
      <div
        ref={ref}
        className={cn(
          "relative h-[290px] lg:h-[330px] bg-[#10100f] bg-no-repeat bg-cover bg-center border-[16px] border-neutral-200 shadow-lg transition-all",
          className
        )}
        style={style}
      >
        <Image
          className="object-cover"
          src={slide.image}
          alt=""
          fill
          sizes="1024px"
        />
        {index === slidesShow[0] && (
          <p className="absolute left-0 top-0 text-nowrap text-neutral-950 bg-neutral-200/50 px-1 rotate-[-6deg]">
            {slide.description}
          </p>
        )}
      </div>
    </div>
  );
};
