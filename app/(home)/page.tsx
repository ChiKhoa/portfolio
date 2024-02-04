import { FaCss3, FaHtml5 } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import {
  TbBrandNextjs,
  TbBrandSupabase,
  TbBrandTailwind,
  TbBrandTypescript,
} from "react-icons/tb";
import { Section } from "./components/section";
import { SectionItem } from "./components/section-item";

export default function Home() {
  return (
    <>
      <Section title="Personal projects">
        <SectionItem
          title="SBmusic"
          description="Listen, upload, add sounds to collection, and more"
          icons={[
            TbBrandNextjs,
            TbBrandTypescript,
            TbBrandTailwind,
            TbBrandSupabase,
          ]}
          href="sb-music"
        />
      </Section>
      <Section title="Collaboration projects">
        <SectionItem
          title="Cloudy Drinks"
          description="Final project for Web Application Development course"
          icons={[FaHtml5, FaCss3, SiJavascript]}
          href="cloudy-drinks"
        />
      </Section>
    </>
  );
}
