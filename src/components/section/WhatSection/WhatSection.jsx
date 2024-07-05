import React from 'react';
import { useTranslation } from 'react-i18next';
import WhatImg from "../../../assets/images/png/what-image.png";
import "./what-section.scss";
import parse from 'html-react-parser';

export const WhatSection = () => {
  const { t } = useTranslation();
  return (
    <section className="what-section__container">
      <div className="w-full flex flex-col md:flex-row gap-10" >
        <div className="w-full flex flex-col md:w-1/2 " >
          <h2 className="what-section__title">
            {t('what_large').toUpperCase()}
          </h2>
          <div className="h-1 w-14 bg-no-repeat bg-left-top bg-contain bg-underline-small-pattern"></div>
          <h1 className="what-section__subtitle">{t("what_title")}
          </h1>
          {/* <div className="h-3 w-48 bg-no-repeat bg-left-top bg-contain bg-underline-pattern"></div> */}
        </div>
        <div className="w-full flex flex-col md:w-1/2 " >
          <div className="">
            <p className="text-primary font-normal text-base leading-6 mt-0 md:mt-8 md:text-xl">
              {parse(t("what_description"))}
            </p>
          </div>
        </div>
      </div>
      <div className="what-section__image--section">
        <img className="what-section__image-img" src={WhatImg} alt="what-image" />
      </div>
    </section >
  );
};
