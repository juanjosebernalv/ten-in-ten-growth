import React from 'react';
import { useTranslation } from 'react-i18next';
import TeamImage from "../../../assets/images/png/team-image.png";
import Member0 from "../../../assets/images/png/members/member0.png";
import Member1 from "../../../assets/images/png/members/member1.png";
import Member2 from "../../../assets/images/png/members/member2.png";
import Member3 from "../../../assets/images/png/members/member3.png";
import Member4 from "../../../assets/images/png/members/member4.png";
import Member5 from "../../../assets/images/png/members/member5.png";
import Member6 from "../../../assets/images/png/members/member6.png";
import Member7 from "../../../assets/images/png/members/member7.png";
import Member8 from "../../../assets/images/png/members/member8.png";
import Member9 from "../../../assets/images/png/members/member9.png";
import Member10 from "../../../assets/images/png/members/member10.png";
import Member11 from "../../../assets/images/png/members/member11.png";
import './team-section.scss';
import { TeamCard } from '../../TeamCard';

export const TeamSection = () => {
  const { t } = useTranslation();
  const members = [
    Member0,
    Member1,
    Member2,
    Member3,
    Member4,
    Member5,
    Member6,
    Member7,
    Member8,
    Member9,
    Member10,
    Member11,
  ];
  return (
    <div className="w-full min-w-full">
      <section className="team-section__container">
        <div>
          <h1 className="team-section__summary-title">{t("team_large")} </h1>
          <p className="team-section__summary-description">{t("team_description")}</p>
        </div>
        <img src={TeamImage}
          className="mt-6 md:mt-0 w-full -mr-12 md:-mr-24"
          alt="home-image-small" />

      </section>
      <section className="team-section__team-members">
        <div className="w-full min-w-full flex flex-col md:grid md:grid-cols-3 gap-10">
          {members.map((member, index) => {
            return (
              <TeamCard member={member} index={index} key={`our-team-${index}`} />
            );
          })}
        </div>
      </section>
    </div>
  );
}


  ;;
