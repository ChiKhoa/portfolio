import { ImQuotesLeft } from "react-icons/im";

export const SectionAbout = () => {
  return (
    <section id="about" className="flex flex-col gap-y-8 py-16">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/3">
          <div className="h-full border-r-0 lg:border-r-[2px] border-[#b4b2ac] lg:pr-8">
            <h2 className="text-4xl lg:text-5xl font-bold lg:text-right">
              About
              <br className="hidden lg:inline" /> me
            </h2>
            <div className="block lg:hidden w-16 h-1 bg-[#b4b2ac] mt-6" />
          </div>
        </div>
        <div className="flex-1">
          <p className="indent-8">
            My name is Pham Nguyen Chi Khoa, a.k.a SunnyBiolie. I was born in
            Vietnam, and now I live in Ho Chi Minh City. I am currently a
            final-year student at University of Economics Ho Chi Minh City,
            majoring in{" "}
            <span className="text-highlight">software engineering</span>. In
            university, I am sociable, cheerful, responsible, and trustworthy. I
            always try to complete my tasks as best as possible.
          </p>
          <p className="indent-8">
            My hobbies are playing soccer, listening to music, playing games,
            taking pictures of landscapes, and, of course, coding. My strengths
            are the abilities to find information, quickly learn new knowledge,
            and absorb it well.
          </p>
        </div>
      </div>
      <div className="w-full md:w-4/5 lg:w-3/4 m-auto py-8 space-y-8 tracking-wide">
        <ImQuotesLeft className="size-16 text-sky-500" />
        <p className="text-3xl font-normal italic leading-normal">
          You only live once, but if you do it right, once is enough.
        </p>
        <p className="text-lg font-semibold">Mae West</p>
      </div>
    </section>
  );
};
