import Image from "next/image";
import { SiPrisma, SiRemix, SiTailwindcss, SiTypescript } from "react-icons/si";

import { SectionTop } from "@/components/project/section-top";
import { SectionOverview } from "../../../components/project/section-overview";
import { SectionTech } from "@/components/project/section-tech";
import { SectionAboutApplication } from "./_components/section-about-application";
import { SectionMoreDetails } from "./_components/section-more-details";
import { SectionTodos } from "@/components/project/section-todos";
import { SectionFooter } from "../../../components/project/section-footer";

import { TechItem } from "@/components/project/tech-item";

import { projectData, applicationImages } from "@/data/dataShareStory";
import { todos } from "@/data/dataShareStory";
import { packageJSON } from "@/data/dataShareStory";

const ShareStoryPage = () => {
  return (
    <div>
      <SectionTop type={projectData.type} title={projectData.title} />
      <SectionOverview
        projectData={projectData}
        images={applicationImages}
        bgImage="https://firebasestorage.googleapis.com/v0/b/storage-30bbd.appspot.com/o/portfolio%2Fshare_story%2Fbg-image.png?alt=media&token=2b779eab-7585-4b0a-8bb2-55625fd22f1d"
      />
      <SectionTech packageJSON={packageJSON}>
        <TechItem title="Remix.run" href="https://remix.run/">
          <SiRemix className="w-full h-full text-black" />
        </TechItem>
        <TechItem title="TypeScript" href="https://www.typescriptlang.org/">
          <SiTypescript className="w-full h-full text-[#3178c6]" />
        </TechItem>
        <TechItem title="Tailwind CSS" href="https://tailwindcss.com/">
          <SiTailwindcss className="w-full h-full text-[#0e9fe1]" />
        </TechItem>
        <TechItem title="Prisma ORM" href="https://www.prisma.io/">
          <SiPrisma className="w-full h-full text-[#4DB6AC]" />
        </TechItem>
      </SectionTech>
      <SectionAboutApplication />
      <SectionMoreDetails />
      <SectionTodos todos={todos} />
      <SectionFooter />
    </div>
  );
};

export default ShareStoryPage;
