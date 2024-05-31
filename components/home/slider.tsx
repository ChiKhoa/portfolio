"use client";

import {
  type Dispatch,
  ElementRef,
  type SetStateAction,
  createContext,
  useRef,
  useState,
  useContext,
} from "react";
import { cn } from "@/lib/utils";
import { type Slide } from "@/data/dataHomeSlides";

const MouseEnterContext = createContext<
  [boolean, Dispatch<SetStateAction<boolean>>] | undefined
>(undefined);

interface SliderContainerProps {
  children: React.ReactNode;
  containerClassName?: string;
  slidesShow: [number, number];
  setSlidesShow: Dispatch<SetStateAction<[number, number]>>;
  slides: Slide[];
  className?: string;
}

export const Slider = ({
  children,
  containerClassName,
  slidesShow,
  setSlidesShow,
  slides,
  className,
}: SliderContainerProps) => {
  const ref = useRef<ElementRef<"div">>(null);
  const [isMouseEnterd, setIsMouseEnterd] = useState<boolean>(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = ref.current;
    if (!target) return;

    const { left, top, width, height } = target.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;

    target.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
  };

  const handleMouseEnter = () => {
    if (!ref.current) return;
    setIsMouseEnterd(true);
  };

  const handleMouseLeave = () => {
    const target = ref.current;
    if (!target) return;
    setIsMouseEnterd(false);
    target.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  const handleClick = () => {
    let newSlidesId: [number, number] = [0, 0];
    newSlidesId[0] = slidesShow[0] + 1 < slides.length ? slidesShow[0] + 1 : 0;
    newSlidesId[1] = slidesShow[1] + 1 < slides.length ? slidesShow[1] + 1 : 0;

    setSlidesShow(newSlidesId);
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEnterd, setIsMouseEnterd]}>
      <div
        className={cn(
          "py-20 flex items-center justify-center [perspective:1000px]",
          containerClassName
        )}
      >
        <div
          ref={ref}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          className={cn(
            "relative flex items-center justify-center transition-all duration-200 ease-linear [transformStyle:preserve-3d] [&>*]:[transform-style:preserve-3d] cursor-pointer",
            className
          )}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};
