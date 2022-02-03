import React, { Fragment, useState, useContext } from "react";

import classes from './MobileHeader.module.css';
import SvgAmLogo from "./iconComponents/AmLogo";
import SvgMoon from "./iconComponents/Moon";
import SvgSun from "./iconComponents/Sun";
import roFlag from '../assets/icons/romania.png';
import ukFlag from '../assets/icons/unitedKingdom.png';

import GlobalState from "../store/store";


const MobileHeader = (props) => {
  const [active, setActive] = useState(false);
  const ctx = useContext(GlobalState);
  const dark = ctx.darkMode;
  const language = ctx.currentLanguage;

  const resumeModalHandler = () => {
    ctx.changeResumeModalState();
    document.body.style.overflowY = 'hidden';
}

  const changeMenuState = () => {
    if(active) {
      setActive(false)
      document.body.style.overflowY = 'unset';
    }
    if(!active) {
      setActive(true)
      document.body.style.overflowY = 'hidden';
    }
  }  


  const aboutClickHandler = () => {
    props.aboutClick();
    setActive(prevState => !prevState);
    document.body.style.overflowY = 'unset';
  }

  const projectsClickHandler = () => {
    props.projectsClick();
    setActive(prevState => !prevState);
    document.body.style.overflowY = 'unset';
  }

  const contactClickHandler = () => {
    props.contactClick();
    setActive(prevState => !prevState);
    document.body.style.overflowY = 'unset';
  }

  const displayedText = {
    about: {
        ro: 'Despre mine',
        eng: 'About'
    },
    projects: {
        ro: 'Proiecte',
        eng: 'Projects'
    },
    contact: {
        ro: 'Contact',
        eng: 'Contact'
    },
    button: {
        ro: 'Vezi CV',
        eng: 'Resume'
    }
}

    return (
        <Fragment>
        <nav className={`${classes.header} ${dark ? classes.darkHeader : classes.lightHeader}`}>
          <SvgAmLogo className={classes.logo} onClick={props.logoClick}/>
        </nav>
          <button className={classes.hamburger} onClick={changeMenuState}>
            <div className={`${classes.bar1} ${active ? classes.activeBar1 : ''} ${dark ? classes.barLight : classes.barDark}`}></div>
            <div className={`${classes.bar2} ${active ? classes.activeBar2 : ''} ${dark ? classes.barLight : classes.barDark}`}></div>
            <div className={`${classes.bar3} ${active ? classes.activeBar3 : ''} ${dark ? classes.barLight : classes.barDark}`}></div>
          </button>
        <div className={`${classes.mobileMenu} ${active ? classes.menuActive : ''} ${dark ? classes.mobileMenuDark : classes.mobileMenuLight}`}>
          <div className={`${classes.modeSwitcher} ${active ? classes.visible : ''}`}>
            <input type="checkbox" className={classes.checkbox} id='checkbox' checked={dark} onChange={ctx.changeTheme}/>
            <label htmlFor='checkbox' className={classes.label}>
              <SvgMoon />
              <SvgSun />
              <div className={classes.ball}></div>
            </label>
          </div>
          <ul className={classes.menuItems}>
            <li onClick={aboutClickHandler} className={`${classes.navItem} ${dark ? classes.navItemDark : classes.navItemLight}`}>{language === 'ro' ? displayedText.about.ro : displayedText.about.eng}</li>
            <li onClick={projectsClickHandler} className={`${classes.navItem} ${dark ? classes.navItemDark : classes.navItemLight}`}>{language === 'ro' ? displayedText.projects.ro : displayedText.projects.eng}</li>
            <li onClick={contactClickHandler} className={`${classes.navItem} ${dark ? classes.navItemDark : classes.navItemLight}`}>{language === 'ro' ? displayedText.contact.ro : displayedText.contact.eng}</li>
            <li><button onClick={resumeModalHandler} className={`${classes.navBtn} ${dark ? classes.navBtnDark : classes.navBtnLight}`} >{language === 'ro' ? displayedText.button.ro : displayedText.button.eng}</button></li>
            <li className={`${classes.language} ${dark ? classes.languageDark : classes.languageLight}`} onClick={ctx.changeLanguage}><img src={language === 'eng' ? ukFlag : roFlag} className={classes.flag} alt=''></img></li>
          </ul>
        </div>
        {active && <div className={`${classes.backDrop} ${dark ? classes.backDropDark : classes.backDropLight}`} onClick={changeMenuState}></div>}
        </Fragment>
    )
}

export default MobileHeader;