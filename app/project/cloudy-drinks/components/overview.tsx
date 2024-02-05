"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaPlay } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { images } from "@/assets/index";
import { projectData } from "@/data/dataCloudyDrinks";

export const Overview = () => {
  const [isPlay, setIsPlay] = useState<boolean>(false);

  return (
    <section className="mb-10">
      <div className="flex flex-col items-center gap-y-6">
        {!isPlay ? (
          <div
            className="relative aspect-video w-full sm:w-3/4 rounded-md overflow-hidden shadow-md shadow-black cursor-pointer"
            onClick={() => setIsPlay(true)}
          >
            <Image
              src={images.imgVideoThumbnail}
              alt=""
              className="absolute top-0 left-0 right-0 bottom-0 object-cover"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center gap-y-4 w-full h-full bg-neutral-800/70 hover:bg-neutral-800/50 transition">
              <FaPlay className="w-12 h-12" />
              <p>Video demo</p>
            </div>
          </div>
        ) : (
          <video className="aspect-video w-3/4 rounded-md" controls autoPlay>
            <source src={projectData.video_demo!} type="video/mp4"></source>
            Your browser does not support the video tag.
          </video>
        )}
        <div className="self-start flex flex-col gap-y-4">
          <p>This project has no deployment.</p>
          <div className="flex gap-x-4">
            <div className="flex items-center gap-x-2">
              <FaGithub className="w-7 h-7" /> Source code on Github:
            </div>
            <Link href={projectData.source} target="_blank">
              <Button>View code</Button>
            </Link>
          </div>
          <p>
            Collaboration with <strong>Nguyễn Tiến Dũng</strong> (
            <Link
              href="https://github.com/cowd90"
              target="_blank"
              className="text-highlight underline"
            >
              cowd90
            </Link>
            ).
          </p>
        </div>
      </div>
    </section>
  );
};
