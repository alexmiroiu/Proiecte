import classes from './Header.module.css';
import logo from '../assets/icons/logo.svg';

const Header = () => {
    return <div className={classes.header}>
        <div className={classes.logoHolder}>
            <img src={logo} alt="logo" />
        </div>
        <nav className={classes.mainNav}>
            <ul className={classes.menuItems}>
                <li className={classes.navItem}>Despre mine</li>
                <li className={classes.navItem}>Proiecte</li>
                <li className={classes.navItem}>contact</li>
                <li className={classes.navItem}>CV</li>
            </ul>
        </nav>
    </div>
}

export default Header;