import React from 'react';
import { useRef, useImperativeHandle } from 'react';

import classes from './Hero.module.css';
import profilePic from '../assets/profile.jpg';
import SvgDownIcon from './iconComponents/DownIcon';
import scrollIcon from '../assets/scrollBlue.png';

const Hero = React.forwardRef((props, ref) => {
    const heroRef = useRef();

    const navigate = () => {
        heroRef.current.scrollIntoView({behavior: 'smooth'});
    };

    useImperativeHandle(ref, () => {
        return {
            goToHero: navigate
        };
    });

    return <section className={classes.hero} ref={heroRef}>
        <div className={classes.profilePicContainer}>
            <div className={classes.imageWrapper}>
                <img src={profilePic} alt="profile" className={classes.profileImg}/>
                <div className={classes.ring1}></div>
                <div className={classes.ring2}></div>
                <div className={classes.ring3}></div>
            </div>
        </div>

        <div className={classes.scroll}>
            <SvgDownIcon className={classes.scrollIcon}/>
        </div>

        <article className={classes.heroInfo}>
            <div>
                <p className={classes.heroHello}>Salut, ma numesc</p>
                <p className={classes.heroName}>Alex Miroiu.</p>
            </div>
            <div className={classes.heroTitle}>
                <p>front-end</p>
                <p>web</p>
                <p>developer</p>
            </div>
            <p className={classes.heroDescription}>La momentul actual programarea web a devenit pasiunea mea si urmaresc o schimbare de cariera in acest domeniu. Obiectivul meu este sa creez sau sa contribui la crearea de aplicatii web moderne, cu tehnologii curente care sa fie folosite de cat mai multi utilizatori.</p>
        </article>

    </section>
})

export default Hero;