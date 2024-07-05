import React from 'react';
import { useTranslation } from 'react-i18next';
import HowImg from "../../../assets/images/png/how-image.png";
import parse from 'html-react-parser';
import "./how-section.scss";

const HowSection = () => {
  const { t } = useTranslation();
  return (
    <section className="how-section__container bg-none md:bg-bg-how bg-no-repeat bg-left-bottom">
      <div className="flex flex-col w-full md:w-1/2 pr-0 md:pr-20" >
        <h2 className="how-section__title">
          {t('how_large').toUpperCase()}
        </h2>
        <div className="h-1 w-14 bg-no-repeat bg-left-top bg-contain bg-underline-small-pattern"></div>
        <h1 className="how-section__subtitle">{t("how_title")}
        </h1>
        <div className="h-3 w-48 bg-no-repeat bg-left-top bg-contain bg-underline-pattern"></div>
        <div className="mt-10">
          <p className="text-primary font-normal text-base leading-6 mt-0 md:mt-8 md:text-xl pb-4 md:pb-48">
            {parse(t("how_description"))}
          </p>
        </div>
      </div>
      <div className="w-full md:w-1/2 ">
        <img src={HowImg} alt="how-image" className="w-full -mb-0 md:-mb-[100px]" />
      </div>
    </section>
  );
};

export default HowSection;
