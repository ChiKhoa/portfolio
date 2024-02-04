interface TopHeadingProps {
  type: string;
  title: string;
}

export const TopHeading = ({ type, title }: TopHeadingProps) => {
  return (
    <section className="mb-10">
      <h5 className="text-sm font-medium">{type}</h5>
      <h2 className="text-highlight font-semibold text-3xl mt-1">{title}</h2>
    </section>
  );
};
