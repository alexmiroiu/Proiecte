import React, { Fragment, useState, useContext } from "react";
import classes from './MobileHeader.module.css';
import SvgLogo from "./iconComponents/Logo";
import SvgMoon from "./iconComponents/Moon";
import SvgSun from "./iconComponents/Sun";
import Theme from "../store/theme";

const MobileHeader = (props) => {
  const [active, setActive] = useState(false);
  const ctx = useContext(Theme);
  console.log(active);


  const changeButtonState = () => {
    setActive(prevState => !prevState)
  }

    return (
        <Fragment>
        <nav className={classes.header}>
          <SvgLogo className={classes.logo}/>
        </nav>
          <button className={classes.hamburger} onClick={changeButtonState}>
            <div className={`${classes.bar1} ${active ? classes.activeBar1 : ''}`}></div>
            <div className={`${classes.bar2} ${active ? classes.activeBar2 : ''}`}></div>
            <div className={`${classes.bar3} ${active ? classes.activeBar3 : ''}`}></div>
          </button>
        <div className={`${classes.mobileMenu} ${active ? classes.menuActive : ''}`}>
          <ul className={classes.menuItems}>
          <li onClick={props.aboutClick} className={classes.navItem}>Despre mine</li>
                <li onClick={props.projectsClick} className={classes.navItem}>Proiecte</li>
                <li onClick={props.contactClick} className={classes.navItem}>Contact</li>
                <li className={classes.navBtn}>CV</li>
                <li>
                    <input type="checkbox" className={classes.checkbox} id='checkbox' onChange={ctx.changeTheme}/>
                    <label htmlFor='checkbox' className={classes.label}>
                        <SvgMoon />
                        <SvgSun />
                        <div className={classes.ball}></div>
                    </label>
                    </li>
          </ul>
        </div>
        {active && <div className={classes.backDrop} onClick={changeButtonState}></div>}
        </Fragment>
    )
}

export default MobileHeader;