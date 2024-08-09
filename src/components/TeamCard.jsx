import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
export const TeamCard = ({ member, index }) => {
  const { t } = useTranslation();
  const [isReady, setIsReady] = useState(false);
  const [isHover, setIsHover] = useState(false);


  useEffect(() => {
    console.log('member', member);
    console.log('index', index);
    setIsReady(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlerOver = () => {
    setIsHover(true);
  };
  const handlerOut = () => {
    setIsHover(false);
  };

  return (
    <div>
      {isReady &&
        <>
          <div className="block md:hidden">
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

          <div className="hidden md:block">
            <div
              className={`${isHover ? 'bg-primary' : 'bg-white'} container  rounded-3xl team-section__profile-container`}
              onMouseOver={() => handlerOver()}
              onMouseLeave={() => handlerOut()}>
              <div className={` ${isHover ? "team-section__profile-outer" : ""} `}></div>
              <div
                className={`${isHover ? 'bg-primary' : 'bg-white'} team-section__profile-inner rounded-3xl z-50`}>

                <img key={index} src={member}
                  alt="member"
                  className={`${isHover ? 'opacity-45' : 'opacity-100'} w-full h-full cursor-pointer`} />
                <div className="bottom-left">
                  <h1 className="text-2xl font-bold">
                    {t(`member${index}_title`)}
                  </h1>
                  <h2 className="text-2xl">
                    {t(`member${index}_role`)}
                  </h2>
                  <p className={`${isHover ? 'block' : 'hidden'} text-base`}>
                    {t(`member${index}_description`)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      }
    </div >
  );
};
