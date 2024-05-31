import Image from "next/image";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

import { SectionTop } from "@/components/project/section-top";
import { SectionOverview } from "../../../components/project/section-overview";
import { SectionTech } from "../../../components/project/section-tech";
import { SectionAboutApplication } from "./_components/section-about-application";
import { SectionMoreDetails } from "./_components/section-more-details";
import { SectionTodos } from "../../../components/project/section-todos";
import { SectionFooter } from "../../../components/project/section-footer";

import { TechItem } from "@/components/project/tech-item";

import { images } from "@/assets/index";
import { projectData, images as overviewImages } from "@/data/dataSBmusic";
import { packageJSON } from "@/data/dataSBmusic";
import { todos } from "@/data/dataSBmusic";

const SBMusicPage = () => {
  return (
    <>
      <SectionTop type={projectData.type} title={projectData.title} />
      <SectionOverview
        projectData={projectData}
        images={overviewImages}
        bgImage="https://firebasestorage.googleapis.com/v0/b/storage-30bbd.appspot.com/o/portfolio%2Fsunnybiolie_music%2FH100px%2FHome.png?alt=media&token=211b09fc-48b9-479f-8f47-fedfa3e607c2"
      />
      <SectionTech packageJSON={packageJSON}>
        <TechItem title="Next 14" href="https://nextjs.org/">
          <SiNextdotjs className="w-full h-full text-black" />
        </TechItem>
        <TechItem title="TypeScript" href="https://www.typescriptlang.org/">
          <SiTypescript className="w-full h-full text-[#3178c6]" />
        </TechItem>
        <TechItem title="Tailwind CSS" href="https://tailwindcss.com/">
          <SiTailwindcss className="w-full h-full text-[#0e9fe1]" />
        </TechItem>
        <TechItem title="Supabase" href="https://supabase.com/">
          <Image
            src={images.imgSupabaseLogo}
            alt="Supabase"
            className="w-full h-full object-cover"
          />
        </TechItem>
      </SectionTech>
      <SectionAboutApplication />
      <SectionMoreDetails />
      <SectionTodos todos={todos} />
      <SectionFooter />
    </>
  );
};

export default SBMusicPage;
