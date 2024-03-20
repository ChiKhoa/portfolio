import Link from "next/link";
import { GrFormPreviousLink } from "react-icons/gr";

export const ProjectHeader = () => {
  return (
    <section className="w-fit pt-4 -mt-4 mb-10">
      <Link
        href={"/"}
        className="flex items-center gap-x-1 hover:underline hover:text-highlight transition"
      >
        <GrFormPreviousLink className="size-6" />
        Return Home
      </Link>
    </section>
  );
};
