import { ProjectDataType } from "@/data/dataProjects";
import Link from "next/link";
import { IconType } from "react-icons";

interface ProjectItemProps {
  projectData: ProjectDataType;
}

export const ProjectItem = ({ projectData }: ProjectItemProps) => {
  return (
    <Link
      href={`${projectData.href}`}
      className="py-3 px-4 rounded-md hover:bg-neutral-800/50 flex items-center justify-between"
    >
      <div className="basis-[70%] shrink">
        <p className="text-highlight">{projectData.title}</p>
        <p>{projectData.description}</p>
      </div>
      <div className="shrink-0 flex gap-x-4">
        {projectData.techIcons.map((Icon, index) => (
          <Icon key={index} className="w-6 h-6" />
        ))}
        {projectData.more && (
          <span className="size-6 text-sm font-semibold text-center">+2</span>
        )}
      </div>
    </Link>
  );
};
