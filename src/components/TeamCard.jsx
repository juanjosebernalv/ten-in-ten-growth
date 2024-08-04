import React from 'react';
import { useTranslation } from 'react-i18next';
export const TeamCard = ({ member, index }) => {
  const { t } = useTranslation();
  return (
    <div className="">
      <div className="team-section__profile-container">
        <div className="team-section__profile-outer"></div>
        <div className="team-section__profile-inner">
          <img key={index} src={member} alt="member" className="team-section__profile" />
        </div>
      </div>
      <h1 className="team-section__title">
        {t(`member${index}_title`)}
      </h1>
      <h2 className="team-section__role">
        {t(`member${index}_role`)}
      </h2>
      <p className="team-section__description">
        {t(`member${index}_description`)}
      </p>
    </div>
  );
};
