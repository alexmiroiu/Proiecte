import React from 'react';
import { useRef, useImperativeHandle, useContext } from 'react';

import classes from './Hero.module.css';
import profilePic from '../assets/profile.jpg';
import SvgDownIcon from './iconComponents/DownIcon';
import GlobalState from '../store/store';

const Hero = React.forwardRef((props, ref) => {
    const heroRef = useRef();
    const ctx = useContext(GlobalState);

    const dark = ctx.darkMode;

    const navigate = () => {
        heroRef.current.scrollIntoView({behavior: 'smooth'});
    };

    useImperativeHandle(ref, () => {
        return {
            goToHero: navigate
        };
    });

    return <section className={`${classes.hero} ${dark ? classes.heroTextDark : classes.heroTextLight}`} ref={heroRef}>
        <div className={classes.profilePicContainer}>
            <div className={classes.imageWrapper}>
                <img src={profilePic} alt="profile" className={classes.profileImg}/>
                <div className={`${classes.ring1} ${dark ? classes.ring1Dark : classes.ring1Light}`}></div>
                <div className={`${classes.ring2} ${dark ? classes.ring2Dark : classes.ring2Light}`}></div>
                <div className={`${classes.ring3} ${dark ? classes.ring3Dark : classes.ring3Light}`}></div>
            </div>
        </div>

        <div className={classes.scroll}>
            <SvgDownIcon className={`${dark ? classes.scrollIconDark : classes.scrollIconLight}`}/>
        </div>

        <article className={classes.heroInfo}>
            <div>
                <p className={classes.heroHello}>Salut, ma numesc</p>
                <p className={`${classes.heroName} ${dark ? classes.heroNameDark : classes.heroNameLight}`}>Alex Miroiu</p>
                <p className={classes.heroHello}>si sunt </p>
            </div>
            <div className={classes.heroTitle}>
                <p>front-end</p>
                <p>web</p>
                <p>developer.</p>
            </div>
            <p className={classes.heroDescription}>La momentul actual programarea web a devenit pasiunea mea si urmaresc o schimbare de cariera in acest domeniu. Obiectivul meu este sa creez sau sa contribui la crearea de aplicatii web moderne, cu tehnologii curente care sa fie folosite de cat mai multi utilizatori.</p>
        </article>

    </section>
})

export default Hero;