import React, { Fragment, useState, useContext } from "react";
import classes from './MobileHeader.module.css';
import SvgLogo from "./iconComponents/Logo";
import SvgMoon from "./iconComponents/Moon";
import SvgSun from "./iconComponents/Sun";
import Theme from "../store/theme";

const MobileHeader = (props) => {
  const [active, setActive] = useState(false);
  const ctx = useContext(Theme);
  const dark = ctx.darkMode;


  const changeButtonState = () => {
    setActive(prevState => !prevState)
  }

  const aboutClickHandler = () => {
    props.aboutClick();
    setActive(prevState => !prevState);
  }

  const projectsClickHandler = () => {
    props.projectsClick();
    setActive(prevState => !prevState);
  }

  const contactClickHandler = () => {
    props.contactClick();
    setActive(prevState => !prevState);
  }

    return (
        <Fragment>
        <nav className={`${classes.header} ${dark ? classes.darkHeader : classes.lightHeader}`}>
          <SvgLogo className={classes.logo} onClick={props.logoClick}/>
        </nav>
          <button className={classes.hamburger} onClick={changeButtonState}>
            <div className={`${classes.bar1} ${active ? classes.activeBar1 : ''} ${dark ? classes.barLight : classes.barDark}`}></div>
            <div className={`${classes.bar2} ${active ? classes.activeBar2 : ''} ${dark ? classes.barLight : classes.barDark}`}></div>
            <div className={`${classes.bar3} ${active ? classes.activeBar3 : ''} ${dark ? classes.barLight : classes.barDark}`}></div>
          </button>
        <div className={`${classes.mobileMenu} ${active ? classes.menuActive : ''} ${dark ? classes.mobileMenuDark : classes.mobileMenuLight}`}>
          <div className={`${classes.modeSwitcher} ${active ? classes.visible : ''}`}>
            <input type="checkbox" className={classes.checkbox} id='checkbox' onChange={ctx.changeTheme}/>
            <label htmlFor='checkbox' className={classes.label}>
              <SvgMoon />
              <SvgSun />
              <div className={classes.ball}></div>
            </label>
          </div>
          <ul className={classes.menuItems}>
            <li onClick={aboutClickHandler} className={`${classes.navItem} ${dark ? classes.navItemDark : classes.navItemLight}`}>Despre mine</li>
            <li onClick={projectsClickHandler} className={`${classes.navItem} ${dark ? classes.navItemDark : classes.navItemLight}`}>Proiecte</li>
            <li onClick={contactClickHandler} className={`${classes.navItem} ${dark ? classes.navItemDark : classes.navItemLight}`}>Contact</li>
            <li className={`${classes.navBtn} ${dark ? classes.navBtnDark : classes.navBtnLight}`}>Descarca CV</li>
          </ul>
        </div>
        {active && <div className={`${classes.backDrop} ${dark ? classes.backDropDark : classes.backDropLight}`} onClick={changeButtonState}></div>}
        </Fragment>
    )
}

export default MobileHeader;