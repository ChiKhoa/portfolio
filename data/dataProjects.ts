import { IconType } from "react-icons";
import {
  SiClerk,
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiPrisma,
  SiRemix,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export interface ProjectDataType {
  type: "Personal project" | "Collaboration project";
  title: string;
  href: string;
  description: string;
  techIcons: IconType[];
  more?: boolean;
}

export const projectsData: ProjectDataType[] = [
  {
    type: "Personal project",
    title: "Photocial",
    href: "/project/photocial",
    description: "A social networking site for posting photos and more",
    techIcons: [SiNextdotjs, SiTypescript, SiTailwindcss, SiClerk],
    more: true,
  },
  {
    type: "Personal project",
    title: "SBmusic",
    href: "/project/sb-music",
    description: "Listen, upload, add sounds to collection, and more",
    techIcons: [SiNextdotjs, SiTypescript, SiTailwindcss, SiSupabase],
  },
  {
    type: "Personal project",
    title: "Share Story",
    href: "/project/share-story",
    description: "Write blog, share your story, no need an account",
    techIcons: [SiRemix, SiTypescript, SiTailwindcss, SiPrisma],
  },
  {
    type: "Collaboration project",
    title: "Cloudy Drinks",
    href: "/project/cloudy-drinks",
    description: "Final project for Web Application Development course",
    techIcons: [SiHtml5, SiCss3, SiJavascript],
  },
];
