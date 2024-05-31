interface SectionProps {
  children: React.ReactNode;
  title: string;
}

export const ProjectGroup = ({ children, title }: SectionProps) => {
  return (
    <div className="my-12">
      <p className="underline text-lg mb-4">{title}</p>
      <div className="flex flex-col gap-y-2">{children}</div>
    </div>
  );
};
