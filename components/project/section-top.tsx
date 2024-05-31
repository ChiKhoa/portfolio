import Link from "next/link";
import { GrFormPreviousLink } from "react-icons/gr";

interface SectionTopProps {
  type: string;
  title: string;
}

export const SectionTop = ({ type, title }: SectionTopProps) => {
  return (
    <section className="mb-10">
      <div className="w-fit pt-4 -mt-4 mb-10">
        <Link
          href={"/"}
          className="flex items-center gap-x-1 hover:underline hover:text-highlight transition"
        >
          <GrFormPreviousLink className="size-6" />
          Return Home
        </Link>
      </div>
      <h5 className="text-sm font-medium">{type}</h5>
      <h2 className="text-highlight font-semibold text-3xl mt-1">{title}</h2>
    </section>
  );
};
