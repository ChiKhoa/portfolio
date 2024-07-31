import { projectsData } from "@/data/dataProjects";
import { ProjectGroup } from "./project-group";
import { ProjectItem } from "./project-item";

export const SectionProjects = () => {
  const personalProjects = projectsData.filter(
    (project) => project.type === "Personal project"
  );
  const collabProjects = projectsData.filter(
    (project) => project.type === "Collaboration project"
  );

  return (
    <section id="projects" className="py-16">
      <h2 className="text-4xl lg:text-5xl font-bold text-left lg:text-center">
        Projects
      </h2>
      <div className="w-16 h-1 bg-[#b4b2ac] mt-6 lg:mx-auto" />
      {personalProjects && (
        <ProjectGroup title="Pet projects">
          {personalProjects.map((pro, index) => (
            <ProjectItem key={index} projectData={pro} />
          ))}
        </ProjectGroup>
      )}
      {collabProjects && (
        <ProjectGroup title="Collaboration projects">
          {collabProjects.map((pro, index) => (
            <ProjectItem key={index} projectData={pro} />
          ))}
        </ProjectGroup>
      )}
    </section>
  );
};
