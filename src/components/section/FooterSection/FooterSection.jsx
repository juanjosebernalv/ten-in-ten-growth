import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import GrowthLogoWhite from "../../../assets/images/svg/growth-logo-white.svg";
import NLGrowthLogoWhite from "../../../assets/images/svg/dutch-growth-logo-white.svg";
import LinkedinLogo from "../../../assets/images/svg/linkedin-logo.svg";
import FacebookLogo from "../../../assets/images/svg/facebook-logo.svg";
import "./footer-section.scss";
import emailjs from 'emailjs-com';
import Snackbar from '@mui/material/Snackbar';

const FooterSection = () => {
  const { t, i18n } = useTranslation();
  const [footerImage, setFooterImage] = useState(GrowthLogoWhite);

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
      })
      .finally(() => {
        setOpen(false);
        setToEmail('');
      });
  };

  useEffect(() => {
    i18n.language === 'nl' ? setFooterImage(NLGrowthLogoWhite) : setFooterImage(GrowthLogoWhite);
  }, [i18n.language]);
  return (
    <section className="footer-section__container">
      <div className="footer-section__first-section">
        <div className="simple-col" >
          <img src={footerImage} alt="growth-logo-footer" className="pb-6" />
          <p className="text-white font-normal text-base leading-6 mt-8">
            {t("footer_description")}
          </p>
          <div className="flex gap-3 mt-6">
            <img src={LinkedinLogo} alt="linkedin-logo-footer" />
            <img src={FacebookLogo} alt="facebook-logo-footer" />
          </div>
        </div>
        <div className="simple-col" >
          <div className="input-wrapper-dark mt-4">
            <input type="email" placeholder={t("email_submit")} value={toEmail} onChange={(e) => handlerEmailValue(e)} />
            <button onClick={() => handlerSendEmail()}>
              {t("submit_button")}
            </button>
          </div>
          <p className="footer-section__email-label">
            {t("footer_email_description")}
          </p>
        </div>
      </div>
      <div className="footer-section__second-section">
        <p className="footer-section__copy">
          {t("footer_copy")}
        </p>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Thank you for your message!"
      />
    </section >
  );
};

export default FooterSection;
