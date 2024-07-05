import React, { useState } from 'react';
import HomeImageSmall from "../../../assets/images/png/home-image.png";
import { useTranslation } from 'react-i18next';
import "./home-section.scss";
import emailjs from 'emailjs-com';
import Snackbar from '@mui/material/Snackbar';

const HomeSection = () => {
  const { t } = useTranslation();
  const [toEmail, setToEmail] = useState('');
  const [open, setOpen] = useState(false);
  const handlerEmailValue = (e) => {
    setToEmail(e.target.value);
  };

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  const handlerSendEmail = () => {
    setOpen(true);
    const templateParams = {
      to_email: "rebeca@xinx.co",
      message: toEmail,
      from_name: toEmail,
      reply_to: toEmail,
    };

    emailjs.send('service_vc2uh5a', 'template_rf2871i', templateParams, 'wyN9nK7uMX7Js8-b3')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      }).finally(() => {
        setOpen(false);
        setToEmail('');
      });
  };
  return (
    <section className="home-section__container">
      <div className="home-section__container__group--left">
      </div>
      <div className=" flex flex-col md:flex-row w-full min-w-full md:w-10/12 md:min-w-10/12 justify-center gap-0 md:gap-12 items-center">
        <div className="w-full max-w-full md:w-1/2 md:max-w-1/2 pl-0 md:pl-12" >
          <h1 className="home-section__title">{t("title_home")}</h1>
          <p className="home-section__description">
            {t("paragraph_home")}
          </p>
          <div className="input-wrapper">
            <input type="email" placeholder={t("email_submit")} value={toEmail} onChange={(e) => handlerEmailValue(e)} />
            <button onClick={() => handlerSendEmail()}>
              {t("submit_button")}
            </button>
          </div>
          <p className="home-section__submit-text">
            {t("submit_description")}
          </p>
        </div>
        <div className="flex w-full md:w-1/2 md:min-w-1/2 justify-items-center justify-center">
          <img src={HomeImageSmall}
            className="mt-6 md:mt-0 w-full -mr-12 md:-mr-12"
            alt="home-image-small" />
        </div>
      </div>
      <div className="hidden md:flex md:w-1/12 bg-left-pattern bg-no-repeat">
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Thank you for your message!"
      />
    </section>
  );
};

export default HomeSection;
