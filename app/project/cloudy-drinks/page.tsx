"use client";

import { FaBootstrap } from "react-icons/fa";
import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript } from "react-icons/io5";
import { TopHeading } from "../components/top-heading";
import { TechItem } from "../components/tech-item";
import { Overview } from "./components/overview";

import { projectData } from "@/data/dataCloudyDrinks";

import { useTranslation } from "react-i18next";
import i18n from "i18next";
import "@/lib/i18n/cloudy-drinks/i18n";
import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CloudyDrinksPage = () => {
  const [language, setLanguage] = useState<string>("");

  const { t } = useTranslation("translation");
  const changeLanguage = (value: string) => {
    i18n.changeLanguage(value);

    setLanguage(value);
  };

  return (
    <>
      <div className="flex justify-end">
        <Select
          onValueChange={(value) => changeLanguage(value)}
          defaultValue="eng"
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Theme" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="eng">{t("eng")}</SelectItem>
            <SelectItem value="vie">{t("vie")}</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <TopHeading type={t("project_type")} title={projectData.title} />
      <Overview />
      <section className="flex flex-col gap-y-2 mb-10">
        <h3 className="text-highlight underline text-xl font-medium">
          {t("wid")}
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
          {t("mdetails")}
        </h3>
        <div>
          <h5 className="text-highlight mb-1">{t("info")}</h5>
          <p>{t("information_l1")}</p>
          <p>{t("information_l2")}</p>
          <p>{t("information_l3")}</p>

          <p>
            {t("information_l4")} <strong>Nguyễn Tiến Dũng</strong>.
          </p>
        </div>
      </section>
    </>
  );
};

export default CloudyDrinksPage;
