import { Overview } from "../_components/overview";
import { TopHeading } from "../_components/top-heading";

import { projectData, applicationImages } from "@/data/dataShareStory";
import { Tech } from "./_components/tech";
import MoreDetails from "./_components/more-details";
import AboutApplication from "./_components/about-application";
import { Todos } from "./_components/todos";
import { ProjectFooter } from "../_components/footer";
import { ProjectHeader } from "../_components/header";

const ShareStoryPage = () => {
  return (
    <div>
      <ProjectHeader />
      <TopHeading type={projectData.type} title={projectData.title} />
      <Overview
        projectData={projectData}
        images={applicationImages}
        bgImage="https://firebasestorage.googleapis.com/v0/b/storage-30bbd.appspot.com/o/portfolio%2Fshare_story%2Fbg-image.png?alt=media&token=2b779eab-7585-4b0a-8bb2-55625fd22f1d"
      />
      <Tech />
      <AboutApplication />
      <MoreDetails />
      <Todos />
      <ProjectFooter />
    </div>
  );
};

export default ShareStoryPage;
