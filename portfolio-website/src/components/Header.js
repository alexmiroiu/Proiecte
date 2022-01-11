import { useContext } from 'react';
import Theme from '../store/theme';

import classes from './Header.module.css';
import SvgLogo from './iconComponents/Logo';
import SvgSun from './iconComponents/Sun';
import SvgMoon from './iconComponents/Moon';

const Header = (props) => {
    const ctx = useContext(Theme);
    const dark = ctx.darkMode;
    const windowWidth = window.innerWidth;
    console.log(windowWidth)
    

    return <div className={`${classes.header} ${dark ? classes.headerDark : classes.headerLight}`}>
                <SvgLogo className={classes.logo} onClick={props.logoClick}/>
        <nav className={`${classes.mainNav} ${dark ? classes.mainNavDark : classes.mainNavLight}`}>
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
        </nav>
    </div>
}

export default Header;