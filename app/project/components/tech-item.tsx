import Link from "next/link";

interface TechItemProps {
  children: React.ReactNode;
  title: string;
  href?: string;
}

export const TechItem = ({ children, title, href }: TechItemProps) => {
  if (href) {
    return (
      <Link
        href={href || ""}
        target="_blank"
        className="relative m-4 sm:m-5 p-6 sm:p-4 bg-zinc-200 text-neutral-800 text-sm rounded-md flex flex-col items-center justify-center gap-y-3"
      >
        {children}
        <p className="-mx-6 sm:-mx-4">{title}</p>
      </Link>
    );
  } else {
    return (
      <div className="relative m-4 sm:m-5 p-6 sm:p-4 bg-zinc-200 text-neutral-800 text-sm rounded-md flex flex-col items-center justify-center gap-y-3">
        {children}
        <p className="-mx-6 sm:-mx-4">{title}</p>
      </div>
    );
  }
};
