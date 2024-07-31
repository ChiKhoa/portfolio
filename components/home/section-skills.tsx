import { SkillGroup } from "./skill-group";

export const SectionSkills = () => {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-4xl lg:text-5xl font-bold text-left lg:text-center">
        Skills
      </h2>
      <div className="w-16 h-1 bg-[#b4b2ac] mt-6 lg:mx-auto" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-10 pb-8">
        <SkillGroup
          title="Language"
          skills={["HTML5", "JavaScript", "TypeScript"]}
          links={[
            "https://developer.mozilla.org/en-US/docs/Web/HTML",
            "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
            "https://www.typescriptlang.org/",
          ]}
        />
        <SkillGroup
          title="Framework"
          skills={["React", "Next.js", "Remix.run"]}
          links={[
            "https://react.dev/",
            "https://nextjs.org/",
            "https://remix.run/",
          ]}
        />
        <SkillGroup
          title="Styling"
          skills={["CSS3", "Tailwind CSS", "Bootstrap"]}
          links={[
            "https://developer.mozilla.org/en-US/docs/Web/CSS",
            "https://tailwindcss.com/",
            "https://getbootstrap.com/",
          ]}
        />
        <SkillGroup
          title="Database ORM"
          skills={["Prisma"]}
          links={["https://www.prisma.io/"]}
        />
        <SkillGroup
          title="BaaS"
          skills={["Supabase", "Thin Backend"]}
          links={["https://supabase.com/", "https://thin.dev/"]}
        />
        <SkillGroup
          title="Serverless Database"
          skills={["Neon"]}
          links={["https://neon.tech/"]}
        />
        <SkillGroup
          title="Version Control"
          skills={["Git"]}
          links={["https://git-scm.com/"]}
        />
        <SkillGroup
          title="Tools/Others"
          skills={["Clerk", "ImageKit", "shadcn/ui", "Figma"]}
          links={[
            "https://clerk.com/",
            "https://imagekit.io/",
            "https://ui.shadcn.com/",
            "https://www.figma.com/",
          ]}
        />
      </div>
    </section>
  );
};
