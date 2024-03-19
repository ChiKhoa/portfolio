import Link from "next/link";

export const ProjectHeader = () => {
  return (
    <section className="mb-10">
      <Link
        href={"/"}
        className="hover:underline hover:text-highlight transition"
      >
        Return Home
      </Link>
    </section>
  );
};
