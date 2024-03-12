import Link from "next/link";
import { IconType } from "react-icons";

interface SectionItemProps {
  title: string;
  description: string;
  icons?: IconType[];
  href: string;
}

export const SectionItem = ({
  title,
  description,
  icons,
  href,
}: SectionItemProps) => {
  return (
    <Link
      href={`/project/${href}`}
      className="-mx-4 py-3 px-4 rounded-md hover:bg-neutral-800/50 flex items-center justify-between"
    >
      <div className="basis-[70%] shrink">
        <p className="text-highlight">{title}</p>
        <p>{description}</p>
      </div>
      <div className="shrink-0 flex gap-x-4">
        {icons?.map((Icon, index) => (
          <Icon key={index} className="w-6 h-6" />
        ))}
      </div>
    </Link>
  );
};
