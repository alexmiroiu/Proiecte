import { useContext } from 'react';
import Theme from '../store/theme';

import classes from './Header.module.css';
import SvgLogo from './iconComponents/Logo';

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
                <button onClick={ctx.changeTheme}>Press me</button>
            </ul>
        </nav>
    </div>
}

export default Header;