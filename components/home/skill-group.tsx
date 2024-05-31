import Link from "next/link";

interface SkillGroupProps {
  title: string;
  skills: string[];
  links: string[];
}

export const SkillGroup = ({ title, skills, links }: SkillGroupProps) => {
  return (
    <div className="w-full h-fit bg-neutral-800/50 p-4 space-y-4 shadow-md">
      <h6 className="font-semibold text-center bg-neutral-300 text-neutral-700 p-1">
        {title}
      </h6>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <Link
            key={index}
            href={links[index]}
            className="block hover:underline"
          >
            {skill}
          </Link>
        ))}
      </div>
    </div>
  );
};
