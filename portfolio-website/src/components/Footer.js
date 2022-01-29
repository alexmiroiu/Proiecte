import { React } from 'react';
import { useContext } from 'react';
import classes from './Footer.module.css';
import SvgCopyright from './iconComponents/Copyright';
import SvgLocation from './newIconComponents/Location';
import SvgGithubLogo from './iconComponents/GithubLogo';
import SvgLinkedin from './iconComponents/Linkedin';
import SvgEmail from './iconComponents/Email';

import GlobalState from '../store/store';

const Footer = () => {
    const ctx = useContext(GlobalState);
    const dark = ctx.darkMode;

    return <div className={`${classes.footer} ${dark ? classes.footerDark : classes.footerLight}`}>
        <div className={classes.footerWrapper}>
            
        </div>
        
        <div className={classes.contactMeans}>
            <SvgGithubLogo />
            <SvgLinkedin />
            <div className={classes.emailWrapper}>
                <SvgEmail />
                <p>alexandrumiroiu@gmail.com</p>
            </div>
        </div>

        <p>Alexandru Miroiu 2022</p>
        <div className={classes.location}>
            <SvgLocation />
            <p>Prahova, Ploiesti</p>
        </div>
    </div>
}

export default Footer;