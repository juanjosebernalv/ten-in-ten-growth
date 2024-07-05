import React from 'react';
import { useTranslation } from 'react-i18next';
import Wallet from "../../../assets/images/svg/wallet-circle.svg";
import Cloud from "../../../assets/images/svg/cloud-circle.svg";
import Pig from "../../../assets/images/svg/pig-circle.svg";
import "./why-section.scss";
import parse from 'html-react-parser';

const WhySection = () => {
  const { t } = useTranslation();
  return (
    <section className="why-section__container">
      <div className="w-full min-w-full" >
        <div className="w-full md:w-11/12 md:max-w-11/12 xl:w-9/12 md:max-w-9/12 px-0 md:px-20">
          <h2 className="why-section__title">
            {t('why_large').toUpperCase()}
          </h2>
          <div className="h-1 w-14 bg-no-repeat bg-left-top bg-contain bg-underline-small-pattern"></div>
          <h1 className="why-section__subtitle">{t("why_title")}
          </h1>
          <div className="h-3 w-48 bg-no-repeat"></div>
        </div>
        <div className="flex flex-col md:flex-row w-full min-w-full mt-10 gap-4 md:gap-0 md:mt-20 ">
          <div className="hidden md:flex md:w-1/12 bg-left-pattern bg-no-repeat ">
          </div>
          <div className="w-full md:w-4/12 px-0 md:px-10 bg-none md:bg-wave-left bg-no-repeat bg-right-top">
            <img src={Wallet} alt="wallet-icon" />
            <p className="why-section__paragraph">
              {t("wallet_paragraph")}
            </p>
          </div>
          <div className="w-full md:w-4/12 px-0 md:px-10 bg-none md:bg-wave-right bg-no-repeat bg-right-top">
            <img src={Cloud} alt="cloud-icon" />
            <p className="why-section__paragraph">
              {parse(t("cloud_paragraph"))}
            </p>
          </div>
          <div className="w-full md:w-4/12 px-0 md:px-10">
            <img src={Pig} alt="pig-icon" />
            <p className="why-section__paragraph">
              {t("pig_paragraph")}
            </p>
          </div>
          <div className="hidden md:flex md:w-1/12 ">
          </div>
        </div>
        <div className="text-white pl-0 md:pl-[120px] text-lg pt-20">
          {parse(t("why_copy"))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
