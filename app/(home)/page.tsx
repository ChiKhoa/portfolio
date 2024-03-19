import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiRemix,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { Section } from "./_components/section";
import { SectionItem } from "./_components/section-item";

export default function Home() {
  return (
    <>
      <Section title="Personal projects">
        <SectionItem
          title="SBmusic"
          description="Listen, upload, add sounds to collection, and more"
          icons={[SiNextdotjs, SiTypescript, SiTailwindcss, SiSupabase]}
          href="sb-music"
        />
        <SectionItem
          title="Share Story"
          description="Write blog, share your story, no need an account"
          icons={[SiRemix, SiTypescript, SiTailwindcss]}
          href="share-story"
        />
      </Section>
      <Section title="Collaboration projects">
        <SectionItem
          title="Cloudy Drinks"
          description="Final project for Web Application Development course"
          icons={[SiHtml5, SiCss3, SiJavascript]}
          href="cloudy-drinks"
        />
      </Section>
    </>
  );
}
