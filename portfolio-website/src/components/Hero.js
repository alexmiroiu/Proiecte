import React, { useEffect, useState } from 'react';
import { useRef, useImperativeHandle, useContext } from 'react';

import classes from './Hero.module.css';
import profilePic from '../assets/profile.jpg';
import SvgDownIcon from './iconComponents/DownIcon';
import GlobalState from '../store/store';

const Hero = React.forwardRef((props, ref) => {
    const [scrollVisible, setScrollVisible] = useState(true)
    const heroRef = useRef();
    const ctx = useContext(GlobalState);
    const dark = ctx.darkMode;
    const language = ctx.currentLanguage;

    const navigate = () => {
        heroRef.current.scrollIntoView({behavior: 'smooth'});
    };

    useImperativeHandle(ref, () => {
        return {
            goToHero: navigate
        };
    });

    const listenToScroll = () => {
        let heightToHideFrom = 500;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        if(winScroll > heightToHideFrom) {
            scrollVisible && setScrollVisible(false);
        } else {
            setScrollVisible(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
        return () => {
            window.removeEventListener('scroll', listenToScroll)
        }
    }, [])

    const displayedText = {
        hello1: {
            ro: 'Salut, ma numesc',
            eng: 'Hello, my name is'
        },
        hello2: {
            ro: 'si sunt',
            eng: 'and I\'m a'
        },
        description: {
            ro: 'La momentul actual programarea web a devenit pasiunea mea si urmaresc o schimbare de cariera in acest domeniu. Caut un job full time unde sa pot contribui la crearea de aplicatii web moderne, obiectivul meu pe termen lung fiind dezvoltarea catre un rol full-stack.',
            eng: 'Web development is my passion and my new professional career focus. Contributing to the creation of modern web applications with the use of new technologies has become my drive.'
        }
    }

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
            {scrollVisible && <SvgDownIcon className={`${dark ? classes.scrollIconDark : classes.scrollIconLight}`}/>}
        </div>

        <article className={classes.heroInfo}>
            <div>
                <p className={classes.heroHello}>{language === 'ro' ? displayedText.hello1.ro : displayedText.hello1.eng}</p>
                <p className={`${classes.heroName} ${dark ? classes.heroNameDark : classes.heroNameLight}`}>Alex Miroiu</p>
                <p className={classes.heroHello}>{language === 'ro' ? displayedText.hello2.ro : displayedText.hello2.eng}</p>
            </div>
            <div className={classes.heroTitle}>
                <p>front-end</p>
                <p>web</p>
                <p>developer.</p>
            </div>
            <p className={classes.heroDescription}>{language === 'ro' ? displayedText.description.ro : displayedText.description.eng}</p>
        </article>

    </section>
})

export default Hero;