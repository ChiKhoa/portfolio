"use client";

import { usePathname } from "next/navigation";
import { projectsData } from "@/data/dataProjects";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import Link from "next/link";

export const ProjectFooter = () => {
  const pathname = usePathname();

  const currentIndex = projectsData.findIndex((item) => item.href === pathname);
  const prevProject = projectsData[currentIndex - 1];
  const nextProject = projectsData[currentIndex + 1];

  return (
    <section>
      <div className="font-medium text-highlight">Other Projects</div>
      <div className="flex items-center justify-between pt-4">
        {prevProject ? (
          <Link
            href={prevProject.href}
            className="flex items-center justify-center gap-x-1 hover:underline hover:text-highlight transition"
          >
            <GrFormPreviousLink className="size-6" />
            <span>{prevProject.title}</span>
          </Link>
        ) : (
          <div></div>
        )}
        {nextProject ? (
          <Link
            href={nextProject.href}
            className="flex items-center justify-center gap-x-1 hover:underline hover:text-highlight transition"
          >
            <span>{nextProject.title}</span>
            <GrFormNextLink className="size-6" />
          </Link>
        ) : (
          <div></div>
        )}
      </div>
    </section>
  );
};
