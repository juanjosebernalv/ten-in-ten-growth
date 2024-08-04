import React from 'react';
import { useTranslation } from 'react-i18next';
import TeamImage from "../../../assets/images/png/team-image.png";
import Member0 from "../../../assets/images/png/members/member0.png";
import Member1 from "../../../assets/images/png/members/member1.png";
import './team-section.scss';
import { TeamCard } from '../../TeamCard';

export const TeamSection = () => {
  const { t } = useTranslation();
  const members = [
    Member0, Member1
  ];
  return (
    <div className="w-full min-w-full">
      <section className="team-section__container">
        <div>
          <h1 className="team-section__summary-title">{t("team_large")} </h1>
          <p className="team-section__summary-description">{t("team_description")}</p>
        </div>
        <img src={TeamImage}
          className="mt-6 md:mt-0 w-full -mr-12 md:-mr-12"
          alt="home-image-small" />

      </section>
      <section className="team-section__team-members">
        <div className="w-full min-w-full">
          {members.map((member, index) => {
            return (
              <>
                <TeamCard member={member} index={index} />
              </>
            );
          })}
        </div>
      </section>
    </div>
  );
}


  ;;
