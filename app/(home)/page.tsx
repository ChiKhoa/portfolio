import { Footer } from "@/components/home/footer";
import { Header } from "@/components/home/header";
import { SectionAbout } from "@/components/home/section-about";
import { SectionContact } from "@/components/home/section-contact";
import { SectionProjects } from "@/components/home/section-projects";
import { SectionSkills } from "@/components/home/section-skills";
import { SectionTop } from "@/components/home/section-top";
import { ImQuotesLeft } from "react-icons/im";

const AboutMePage = () => {
  return (
    <div className="w-[100vw-17px] h-screen scroll-smooth ">
      <Header />
      <SectionTop />
      <div className="lg:max-w-4xl md:max-w-3xl w-[calc(100vw-17px)] min-h-screen px-4 m-auto">
        <SectionAbout />
        <SectionSkills />
        <SectionProjects />
        <SectionContact />
        <Footer />
      </div>
    </div>
  );
};

export default AboutMePage;
