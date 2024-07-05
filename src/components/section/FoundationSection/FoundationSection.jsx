import React from 'react';
import { useTranslation } from 'react-i18next';
import FoundationImg from "../../../assets/images/png/foundation-image.png";
import FoundationMiddleImg from "../../../assets/images/png/baby-image.png";
import VanLeerLogo from "../../../assets/images/svg/van-leer-logo.svg";
import TenLogo from "../../../assets/images/svg/logo-10-in-10.svg";
import LinkButton from '../../LinkButton';
import "./foundation-section.scss";

export const FoundationSection = () => {
  const { t } = useTranslation();

  const handlerFoundation = () => {
    console.log("handler");
    window.open("https://vanleerfoundation.org/", "_blank");
  };

  const handlerTen = () => {
    console.log("handler");
    window.open("https://xinx.co/", "_blank");
  };

  return (
    <section className="foundation-section__container">
      <div className="foundation-section__group" >
        <img src={FoundationImg} alt="foundation-image" className="simple-col mb-6" />
        <div className="foundation-section__group--item">
          <img src={VanLeerLogo} alt="van-leer-image" />
          <p className="foundation-section__description">
            {t("foundation_description")}
          </p>
          <div className="w-48 md:w-48">
            <LinkButton label={t("learn_more")} clickHandler={handlerFoundation} />
          </div>
        </div>
      </div>

      <div className="foundation-section__group mt-10" >
        <img src={FoundationMiddleImg} alt="middle-image" className="simple-col" />
        <div className="mt-10 simple-col">
          <img src={TenLogo} alt="ten-in-ten-image" />
          <p className="foundation-section__description">
            {t("ten_description")}
          </p>
          <div className="w-48 md:w-48">

            <LinkButton label={t("learn_more")} clickHandler={handlerTen} />
          </div>
        </div>
      </div>
    </section>
  );
};
