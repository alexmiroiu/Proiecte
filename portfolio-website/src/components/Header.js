import { useContext, useState } from 'react';
import GlobalState from '../store/store';

import classes from './Header.module.css';
import SvgAmLogo from './iconComponents/AmLogo';
import SvgSun from './iconComponents/Sun';
import SvgMoon from './iconComponents/Moon';
import roFlag from '../assets/icons/romania.png';
import ukFlag from '../assets/icons/unitedKingdom.png';

const Header = (props) => {
    const ctx = useContext(GlobalState);
    const dark = ctx.darkMode;
    const language = ctx.currentLanguage;



    

    return <div className={`${classes.header} ${dark ? classes.headerDark : classes.headerLight}`}>
                <SvgAmLogo className={classes.logo} onClick={props.logoClick}/>
        <nav className={`${classes.mainNav} ${dark ? classes.mainNavDark : classes.mainNavLight}`}>
            <ul className={classes.menuItems}>
                <li className={classes.language} onClick={ctx.changeLanguage}><img src={language === 'eng' ? ukFlag : roFlag} className={classes.flag}></img></li>
                <li onClick={props.aboutClick} className={classes.navItem}>Despre mine</li>
                <li onClick={props.projectsClick} className={classes.navItem}>Proiecte</li>
                <li onClick={props.contactClick} className={classes.navItem}>Contact</li>
                <li><a className={`${classes.navBtn} ${dark ? classes.navBtnDark : classes.navBtnLight}`} href='https://docdro.id/CKzTXXf' without rel="noopener noreferrer" target="_blank">CV</a></li>
                <li>
                    <input type="checkbox" className={classes.checkbox} id='checkbox' checked={dark} onChange={ctx.changeTheme}/>
                    <label htmlFor='checkbox' className={classes.label}>
                        <SvgMoon />
                        <SvgSun />
                        <div className={classes.ball}></div>
                    </label>
                </li>
            </ul>
        </nav>
    </div>
}

export default Header;