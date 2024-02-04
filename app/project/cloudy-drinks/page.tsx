import { FaBootstrap } from "react-icons/fa";
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript } from "react-icons/io5";
import { TopHeading } from "../components/top-heading";
import { TechItem } from "../components/tech-item";
import { Overview } from "./components/overview";

import { projectData } from "@/data/dataCloudyDrinks";

const CloudyDrinksPage = () => {
  return (
    <div>
      <TopHeading type={projectData.type} title={projectData.title} />
      <Overview />
      <section className="flex flex-col gap-y-2 mb-10">
        <h3 className="text-highlight underline text-xl font-medium">
          What i did
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 px-5 sm:px-0">
          <TechItem title="HTML5">
            <IoLogoHtml5 className="w-full h-full text-[#e34c26]" />
          </TechItem>
          <TechItem title="CSS3">
            <IoLogoCss3 className="w-full h-full text-[#264de4]" />
          </TechItem>
          <TechItem title="Javascript">
            <IoLogoJavascript className="w-full h-full text-[#e8c012]" />
          </TechItem>
          <TechItem title="Bootstrap" href="https://getbootstrap.com/">
            <FaBootstrap className="w-full h-full text-[#6f2cf6]" />
          </TechItem>
        </div>
      </section>
      <section className="flex flex-col gap-y-5 mb-10">
        <h3 className="text-highlight underline text-xl font-medium">
          More details
        </h3>
        <div>
          <h5 className="text-highlight mb-1">Information</h5>
          <p>
            This project designs a website used by customers purchasing products
            such as drinks.
          </p>
          <p>
            In this project, I design and code the UI, handle tasks and code
            logic performed on the client.
          </p>
          <p>
            It is programmed in Java language, the <code>html</code> source code
            is in the <code>.jsp</code> file.
          </p>
          <p>
            All the rest on the backend is handled by{" "}
            <strong>Nguyễn Tiến Dũng</strong>.
          </p>
        </div>
      </section>
      <div className="text-highlight">
        Latest updated: Friday, February 3, 2024.
      </div>
    </div>
  );
};

export default CloudyDrinksPage;
