import { MoreDetails } from "./components/more-details";
import { Overview } from "./components/overview";
import { TopHeading } from "../components/top-heading";
import { Tech } from "./components/tech";
import { Todos } from "./components/todos";

import { projectData } from "@/data/dataSBmusic";

const SBMusicPage = () => {
  return (
    <>
      <TopHeading type={projectData.type} title={projectData.title} />
      <Overview projectData={projectData} />
      <Tech />
      <MoreDetails />
      <Todos />
    </>
  );
};

export default SBMusicPage;
