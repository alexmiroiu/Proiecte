import { useContext } from 'react';
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

    

    return <div className={`${classes.header} ${dark ? classes.headerDark : classes.headerLight}`}>
                <SvgAmLogo className={classes.logo} onClick={props.logoClick}/>
        <nav className={`${classes.mainNav} ${dark ? classes.mainNavDark : classes.mainNavLight}`}>
            <ul className={classes.menuItems}>
                <li className={`${classes.language} ${dark ? classes.languageDark : classes.languageLight}`} onClick={ctx.changeLanguage}><img src={language === 'eng' ? ukFlag : roFlag} className={classes.flag} alt=''></img></li>
                <li onClick={props.aboutClick} className={classes.navItem}>{language === 'ro' ? displayedText.about.ro : displayedText.about.eng}</li>
                <li onClick={props.projectsClick} className={classes.navItem}>{language === 'ro' ? displayedText.projects.ro : displayedText.projects.eng}</li>
                <li onClick={props.contactClick} className={classes.navItem}>{language === 'ro' ? displayedText.contact.ro : displayedText.contact.eng}</li>
                <li><button onClick={ctx.changeResumeModalState} className={`${classes.navBtn} ${dark ? classes.navBtnDark : classes.navBtnLight}`}>{language === 'ro' ? displayedText.button.ro : displayedText.button.eng}</button></li>
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