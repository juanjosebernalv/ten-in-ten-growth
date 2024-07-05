import React from 'react';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';
import "./who-section.scss";

export const WhoSection = () => {
  const { t } = useTranslation();
  return (
    <section className="who-section__container">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/2 flex flex-col h-full min-h-full" >
          <h2 className="who-section__title">
            {t('who').toUpperCase()}
          </h2>
          <div className="h-1 w-14 bg-no-repeat bg-left-top bg-contain bg-underline-small-pattern"></div>
          <h1 className="who-section__subtitle">{t("who_title")}
          </h1>
          {/* <div className="h-3 w-full md:w-48 bg-no-repeat bg-left-top bg-contain bg-underline-pattern"></div> */}
          <h3 className="who-section__description">{parse(t("who_subtitle"))}
          </h3>
        </div>
        <div className="w-full md:w-1/2" >
          <div className="">
            <p className="text-primary font-normal text-base md:text-lg leading-6 mt-0
            md:mt-8 md:font-lg">
              {parse(t("who_description"))}
            </p>
          </div>
          <div className="mt-10">
            <ul className="who-section__includes">
              {parse(t("who_list"))}
            </ul>
          </div>

          <div className="mt-10">
            <p className="text-primary font-normal text-base leading-6 mt-8 md:text-xl">
              {parse(t("who_footer"))}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
