import CloseIcon from '@mui/icons-material/Close';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, MenuItem, Select } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Element, Link, scroller } from 'react-scroll';
import ENGrowthLogo from "../../assets/images/svg/growth-logo.svg";
import NLGrowthLogo from "../../assets/images/svg/dutch-growth-logo.svg";
import WhiteWorld from "../../assets/images/svg/white-world.svg";
import World from "../../assets/images/svg/world.svg";
import WhySection from '../../components/section/WhySection/WhySection';
import "./home.scss";
import HomeSection from '../../components/section/HomeSection/HomeSection';
import { WhatSection } from '../../components/section/WhatSection/WhatSection';
import HowSection from '../../components/section/HowSection/HowSection';
import { WhoSection } from '../../components/section/WhoSection/WhoSection';
import { FoundationSection } from '../../components/section/FoundationSection/FoundationSection';
import FooterSection from '../../components/section/FooterSection/FooterSection';


const Home = () => {
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState("en");
  const [openDrawer, setOpenDrawer] = useState(false);
  const [logo, setLogo] = useState(ENGrowthLogo);


  const changeLogo = () => {
    language === 'nl' ? setLogo(NLGrowthLogo) : setLogo(ENGrowthLogo);
    language === 'nl' ? document.title = 'GroeiSpurt' : document.title = 'Growth Spurt';

  };

  useEffect(() => {
    changeLogo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  const handlerChangeLanguage = (event) => {
    const selected = event.target.value;
    setLanguage(selected);
    i18n.changeLanguage(selected);
  };

  const toggleDrawer = status => {
    setOpenDrawer(status);
  };

  const menuOptions = [
    { label: 'Why', value: 'why' },
    { label: 'What', value: 'what' },
    { label: 'How', value: 'how' },
    { label: 'Who', value: 'who' }
  ];

  const scrollType = {
    duration: 500,
    delay: 500,
    smooth: true,
    offset: -10,
  };

  const handlerNavigation = (path) => {
    scroller.scrollTo(path, scrollType);
    setOpenDrawer(false);
  };

  return (
    <div className="">
      <header className="home__header">
        <img className="home__nav--image" src={logo} alt="growth-logo" onClick={() => handlerNavigation('home')} />
        <nav className="home__nav">
          <ul className="home__nav--list">
            <li>
              <Link className="home__nav--link" activeClass="home__nav--list-active" smooth spy to="why">
                {t('why')}
              </Link>
            </li>
            <li>
              <Link className="home__nav--link" activeClass="home__nav--list-active" smooth spy to="what">
                {t('what')}
              </Link>
            </li>
            <li>
              <Link className="home__nav--link" activeClass="home__nav--list-active" smooth spy to="how">
                {t('how')}
              </Link>
            </li>
            <li>
              <Link className="home__nav--link" activeClass="home__nav--list-active" smooth spy to="who">
                {t('who')}
              </Link>
            </li>
          </ul>
          <div className="flex bg-white w-1/6 items-center justify-end">
            <img src={World} alt="world-icon" className="home__nav--icon" />
            <div>
              <Select
                className="border-none text-white mr-8"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={language}
                label="Language"
                defaultValue="en"
                onChange={handlerChangeLanguage}
                sx={{
                  height: 50,
                  color: "#025556",
                  borderStyle: "none",
                  borderWidth: 0,
                  boxShadow: "none",
                  ".MuiOutlinedInput-notchedOutline": { border: 0 },
                  "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
                  "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                  {
                    border: 0,
                  },
                  '.MuiSvgIcon-root ': {
                    fill: "#025556 !important",
                  }
                }}

              >
                <MenuItem value="en">English
                </MenuItem>
                <MenuItem value="nl">Nederlands</MenuItem>
              </Select>
            </div>
          </div>
        </nav>
        <div className="block md:hidden -mt-3">
          <IconButton aria-label="menu-button" onClick={() => toggleDrawer(true)} >
            <DensityMediumIcon fontSize="large" className="text-primary" />
          </IconButton>
        </div>
      </header>
      <Drawer open={openDrawer}
        onClose={() => toggleDrawer(false)}
        overlayStyle={
          {
            backgroundColor: "#012222",
            opacity: 1
          }
        }
        PaperProps={{
          sx: {
            width: "100%",
            height: "100%",
            backgroundColor: "#012222",
            opacity: 1
          },
        }}
      >
        <div className="flex justify-end align-middle pt-8 gap-0 px-6">
          <img src={WhiteWorld} alt="world-icon-white" />
          <Select
            className="border-none text-white mr-8"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={language}
            label="Language"
            defaultValue="en"
            onChange={handlerChangeLanguage}
            sx={{
              height: 50,
              color: "#FFF",
              borderStyle: "none",
              borderWidth: 0,
              boxShadow: "none",
              ".MuiOutlinedInput-notchedOutline": { border: 0 },
              "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
              {
                border: 0,
              },
              "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
              {
                border: 0,
              },
              '.MuiSvgIcon-root ': {
                fill: "white !important",
              }
            }}

          >
            <MenuItem value="en">English
            </MenuItem>
            <MenuItem value="nl">Nederlands</MenuItem>
          </Select>
          <IconButton aria-label="menu-button" onClick={() => toggleDrawer(false)}>
            <CloseIcon className="text-secondary" fontSize="large" />
          </IconButton>
        </div>
        <div
          className="w-full min-w-full h-full bg-dark-green"
        >
          <List className="w-full min-w-full bg-dark-green">
            {menuOptions.map((item, index) => (
              <ListItem key={item.label}
                disablePadding
                onClick={() => handlerNavigation(item.value)}>
                <ListItemButton sx={{
                  borderBottom: 3,
                  borderColor: '#025556',
                  marginLeft: "24px",
                  marginRight: "24px",
                  paddingLeft: 0,
                  height: "48px",
                  marginTop: "40px",
                }}
                >
                  <ListItemText primary={t(item.value)}
                    sx={{
                      color: "#FFF",
                      paddingLeft: 0,
                      fontWeight: 500

                    }}
                    primaryTypographyProps={{ fontSize: '40px' }} />

                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer >

      <main className="w-full min-w-full flex flex-col justify-center">
        <Element name="home">
          <HomeSection />
        </Element>
        <Element name="why">
          <WhySection />
        </Element>
        <Element name="what">
          <WhatSection />
        </Element>
        <Element name="how">
          <HowSection />
        </Element>
        <Element name="who">
          <WhoSection />
        </Element>
        <Element name="foundation">
          <FoundationSection />
        </Element>
        <Element name="footer">
          <FooterSection />
        </Element>
      </main>
    </div >
  );
};

export default Home;
