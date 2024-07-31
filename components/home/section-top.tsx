"use client";

import { useState } from "react";
import { Slider } from "./slider";
import { Slide } from "./slide";
import { slides } from "@/data/dataHomeSlides";
import { FaArrowDown } from "react-icons/fa";

export const SectionTop = () => {
  const [slidesShow, setSlidesShow] = useState<[number, number]>([0, 1]);

  return (
    <section className="flex flex-col p-8 max-w-6xl h-[calc(100vh-56px)] m-auto">
      <div className="flex-1 flex flex-col lg:flex-row items-center gap-x-4 gap-y-6">
        <div className="lg:w-1/2 text-center lg:text-center font-semibold space-y-4 text-4xl lg:text-5xl">
          <p>
            {`Hello! I'm `}
            <span className="bg-sky-500 bg-[linear-gradient(90deg,_rgba(6,182,212,1)_0%,_rgba(59,130,246,1)_63%,_rgba(169,84,255,1)_100%)] [-webkit-background-clip:_text] [-webkit-text-fill-color:_transparent] selection:[-webkit-text-fill-color:_#007eb6]">
              Khoa
            </span>
          </p>
          <p className="underline">Web Developer</p>
        </div>
        <Slider
          containerClassName="w-1/2 h-full"
          slidesShow={slidesShow}
          setSlidesShow={setSlidesShow}
          slides={slides}
          className="size-fit"
        >
          {slides.map((slide, index) => (
            <Slide
              key={index}
              index={index}
              slide={slide}
              slides={slides}
              slidesShow={slidesShow}
              hoverTranslateZ={slidesShow[0] === index ? 60 : 0}
              zIndex={
                slidesShow[0] === index ? slides.length : slides.length - index
              }
              style={{
                aspectRatio: slide.aspectRatio,
                rotate: slide.rotateDeg,
                backgroundImage: `url(${slide.imageXS})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></Slide>
          ))}
        </Slider>
      </div>
      <div className="space-y-2">
        <div className="mx-auto w-10 flex items-center justify-center rounded-full animate-bounce">
          <FaArrowDown className="size-6" />
        </div>
        {/* <p className="w-fit mx-auto text-sm">Scroll down for more</p> */}
      </div>
    </section>
  );
};
