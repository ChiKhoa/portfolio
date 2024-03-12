import { AboutApplication } from "./_components/about-application";
import { Overview } from "../_components/overview";
import { TopHeading } from "../_components/top-heading";
import { Tech } from "./_components/tech";
import { Todos } from "./_components/todos";

import { projectData, images } from "@/data/dataSBmusic";
import MoreDetails from "./_components/more-details";

const SBMusicPage = () => {
  return (
    <>
      <TopHeading type={projectData.type} title={projectData.title} />
      <Overview
        projectData={projectData}
        images={images}
        bgImage="https://firebasestorage.googleapis.com/v0/b/storage-30bbd.appspot.com/o/portfolio%2Fsunnybiolie_music%2FH100px%2FHome.png?alt=media&token=211b09fc-48b9-479f-8f47-fedfa3e607c2"
      />
      <Tech />
      <AboutApplication />
      <MoreDetails />
      <Todos />
    </>
  );
};

export default SBMusicPage;
