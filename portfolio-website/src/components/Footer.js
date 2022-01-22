import { React } from 'react';
import { useContext } from 'react';
import classes from './Footer.module.css';
import SvgCopyright from './iconComponents/Copyright';

import GlobalState from '../store/store';

const Footer = () => {
    const ctx = useContext(GlobalState);
    const dark = ctx.darkMode;

    return <div className={`${classes.footer} ${dark ? classes.footerDark : classes.footerLight}`}>
        <SvgCopyright className={`${classes.copyright} ${dark ? classes.copyrightDark : classes.copyrightLight}`}/>
        <p>Alexandru Miroiu 2022</p>
    </div>
}

export default Footer;