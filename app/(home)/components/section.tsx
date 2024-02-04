interface SectionProps {
  children: React.ReactNode;
  title: string;
}

export const Section = ({ children, title }: SectionProps) => {
  return (
    <section className="my-24">
      <p className="text-highlight underline text-lg mb-8">{title}</p>
      <div className="flex flex-col gap-y-4">{children}</div>
    </section>
  );
};
