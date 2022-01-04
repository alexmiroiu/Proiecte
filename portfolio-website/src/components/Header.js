import { useContext } from 'react';
import Theme from '../store/theme';

import classes from './Header.module.css';
import SvgLogo from './iconComponents/Logo';
import SvgSun from './iconComponents/Sun';
import SvgMoon from './iconComponents/Moon';

const Header = () => {
    const ctx = useContext(Theme);


    return <div className={classes.header}>
            <SvgLogo className={classes.logo}/>
        <nav className={classes.mainNav}>
            <ul className={classes.menuItems}>
                <li className={classes.navItem}>Despre mine</li>
                <li className={classes.navItem}>Proiecte</li>
                <li className={classes.navItem}>contact</li>
                <li className={classes.navItem}>CV</li>
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