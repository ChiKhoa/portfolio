"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { FaGithub } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { useOpenVFS } from "@/hooks/use-open-vfs";
import { Button } from "@/components/ui/button";
import { MyImage, Project } from "@/types";
// import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface OverviewProps {
  projectData: Project;
  images: MyImage[];
  bgImage: string;
}

export const Overview = ({ projectData, images, bgImage }: OverviewProps) => {
  const openVFS = useOpenVFS(images);

  return (
    <section className="flex flex-col md:flex-row gap-10 mb-10">
      <div className="relative basis-1/2 aspect-[3/2] overflow-hidden rounded-lg border-2 ">
        <div
          className="group w-full h-full bg-cover cursor-pointer"
          style={{ backgroundImage: `url('${bgImage}')` }}
          onClick={() => {
            openVFS();
          }}
        >
          <Image
            src={images[0].path}
            alt={images[0].title}
            fill
            sizes="full"
            className="object-cover"
          />
          {images.length > 1 && (
            <div
              className={cn(
                "hidden group-hover:flex items-center justify-center absolute top-0 left-0 right-0 bottom-0 bg-neutral-950/50"
              )}
            >
              <span className="text-4xl font-normal tracking-wider">
                +{images.length - 1}
              </span>
            </div>
          )}
        </div>
        {/* {document.readyState !== "loading" && (
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-neutral-800/80 flex items-center justify-center">
            <AiOutlineLoading3Quarters className="w-10 h-10 animate-spin" />
          </div>
        )} */}
      </div>
      <div className="flex flex-col gap-y-4 justify-between">
        <div className="flex flex-col gap-y-5">
          <div className="flex flex-col gap-y-3">
            <div className="flex items-center gap-x-2">
              <IoLogoVercel className="w-7 h-7" />
              Deployment on Vercel:
            </div>
            {projectData.deployment ? (
              <Link href={projectData.deployment} target="_blank">
                <Button variant="default">Visit deployment</Button>
              </Link>
            ) : (
              <>This project has no deployment.</>
            )}
          </div>
          <div className="flex flex-col gap-y-3">
            <div className="flex items-center gap-x-2">
              <FaGithub className="w-7 h-7" /> Source code on Github:
            </div>
            <Link href={projectData.source} target="_blank">
              <Button>View code</Button>
            </Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-normal">{projectData.status}</p>
        </div>
      </div>
    </section>
  );
};
