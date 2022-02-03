import { React } from 'react';
import { useContext } from 'react';
import classes from './Footer.module.css';
import SvgLocation from './newIconComponents/Location';
import SvgGithubLogo from './iconComponents/GithubLogo';
import SvgLinkedin from './iconComponents/Linkedin';
import SvgEmail from './iconComponents/Email';

import GlobalState from '../store/store';

const Footer = () => {
    const ctx = useContext(GlobalState);
    const dark = ctx.darkMode;

    const language = ctx.currentLanguage;

    const descriptionText = {
        ro: 'Conceput si realizat de Alexandru Miroiu utilizand React JS',
        eng: 'Designed and built by Alexandru Miroiu using React JS'
    }

    return <div className={`${classes.footer} ${dark ? classes.footerDark : classes.footerLight}`}>
        <div className={classes.footerWrapper}>
            <div className={classes.contactMeans}>
                <a href='https://github.com/alexmiroiu' target="_blank" rel="noreferrer noopener">
                    <SvgGithubLogo className={`${classes.footerIcon} ${dark ? classes.iconDarkH : classes.iconLightH}`} />
                </a>
                <a href='https://www.linkedin.com/in/alexandru-miroiu' target="_blank" rel="noreferrer noopener">
                    <SvgLinkedin className={`${classes.footerIcon} ${dark ? classes.iconDarkH : classes.iconLightH}`}/>
                </a>
            </div>
            <div className={classes.emailWrapper}>
                <SvgEmail className={`${classes.footerIcon} ${dark ? classes.iconDark : classes.iconLight}`}/>
                <p>alexandrumiroiu@gmail.com</p>
            </div>
            <div className={classes.location}>
                <SvgLocation className={`${classes.footerIcon} ${dark ? classes.iconDark : classes.iconLight}`}/>
                <p>Prahova, Ploiesti</p>
            </div>
        </div>
        <p className={dark ? classes.pDark : classes.pLight}>{language === 'ro' ? descriptionText.ro : descriptionText.eng}</p>
    </div>
}

export default Footer;