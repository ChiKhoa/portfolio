import { Section } from "./_components/section";
import { SectionItem } from "./_components/section-item";
import { projectsData } from "@/data/dataProjects";

export default function Home() {
  const personalProjects = projectsData.filter(
    (project) => project.type === "Personal project"
  );
  const collabProjects = projectsData.filter(
    (project) => project.type === "Collaboration project"
  );

  return (
    <>
      {personalProjects && (
        <Section title="Personal projects">
          {personalProjects.map((pro, index) => (
            <SectionItem
              key={index}
              title={pro.title}
              description={pro.description}
              icons={pro.techIcons}
              href={pro.href}
            />
          ))}
        </Section>
      )}
      {collabProjects && (
        <Section title="Collaboration projects">
          {collabProjects.map((pro, index) => (
            <SectionItem
              key={index}
              title={pro.title}
              description={pro.description}
              icons={pro.techIcons}
              href={pro.href}
            />
          ))}
        </Section>
      )}
    </>
  );
}
