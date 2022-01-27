import React from 'react';
import { useRef, useImperativeHandle, useContext } from 'react';

import classes from './About.module.css';
import SvgCss from './iconComponents/Css';
import SvgFirebase from './iconComponents/Firebase';
import SvgGit from './iconComponents/Git';
import SvgJavascript from './iconComponents/Javascript';
import SvgReact from './iconComponents/ReactLogo';
import SvgRedux from './iconComponents/Redux';
import SvgRestApi from './iconComponents/RestApi';
import SvgSass from './iconComponents/Sass';
import SvgHtml5 from './iconComponents/Html5';
import wavingHand from '../assets/wavingHand.png';

import GlobalState from '../store/store';

const About = React.forwardRef((props, ref) => {
    const aboutRef = useRef();
    const ctx = useContext(GlobalState);

    const dark = ctx.darkMode;
    const language = ctx.currentLanguage;

    const navigate = () => {
        aboutRef.current.scrollIntoView({behavior: 'smooth'});
    };

    useImperativeHandle(ref, () => {
        return {
            goToAbout: navigate
        };
    });

    const displayedText = {
        preTitle1:{
            ro: 'Cateva cuvinte',
            eng: 'A few words'
        },
        title1: {
            ro: 'Despre mine',
            eng: 'About me'
        },
        preTitle2: {
            ro: 'Stiu sa lucrez cu urmatoarele',
            eng: 'Im proficient in the following'
        },
        title2: {
            ro: 'Tehnologii web',
            eng: 'Technologies'
        }
    }

    return <section className={`${classes.about} ${dark ? classes.aboutTextDark : classes.aboutTextLight}`} ref={aboutRef}>
        <div className={classes.info}>
            <p className={classes.preTitle1}><span className={classes.beforeSpan1}></span>{language === 'ro' ? displayedText.preTitle1.ro : displayedText.preTitle1.eng}<span className={classes.afterSpan1}></span></p>
            <h2>{language === 'ro' ? displayedText.title1.ro : displayedText.title1.eng}</h2>
            <div className={classes.details}>
                {language === 'ro' ? <p>Salut! <span><img src={wavingHand} alt='waving hand'></img></span> Eu sunt Alex!</p> : <p>Hi!  <span><img src={wavingHand} alt='waving hand'></img></span> I'm Alex! </p>}
                {language === 'ro' ? <p>Desi lucrez in domeniul vanzarilor de medicamente de zece ani, in anul 2019 am inceput sa invat despre programarea web iar la scurt timp am realizat ca vreau o schimbare de cariera si <span className={dark ? classes.highlightedDark : classes.highlightedLight}>vreau sa devin un web developer.</span></p> : <p>Even though I've been working as a sales representative in the Pharma industry for the past 10 years, in 2019 I started learning web development and soon realised that I want to change careers and <span className={dark ? classes.highlightedDark : classes.highlightedLight}>become a web developer.</span></p>}
                {language === 'ro' ? <p>Cu toate ca am acumulat majoritatea cunostintelor din carti, cursuri on-line si alte surse de pe internet, in 2019 am decis sa urmez <span className={dark ? classes.highlightedDark : classes.highlightedLight}>cursul de front-end web development al celor de la Link Academy</span>, pe care l-am absolvit in 2020.</p> : <p>Although I've accumulated most of my knowledge from books, on-line courses and different other sources from around the internet, in late 2019 I decided to enroll in <span className={dark ? classes.highlightedDark : classes.highlightedLight}>Link Academy's front-end web development course</span>, which I finished and graduated in late 2020.</p>}
                {language === 'ro' ? <p>Din dorinta de a exersa si de a pune in aplicare ce am invatat, vara trecuta am inceput sa lucrez la mici proiecte personale, lucru care m-a ajutat sa ma dezvolt mult mai accelerat. La momentul actual continui sa invat in fiecare zi si caut proiecte din ce in ce mai indraznete cu care sa imi pun la incercare cunostintele.</p> : <p>Last summer I started working on some personal projects because I felt I needed to practice the things that I learned. I then realised that it speeded up my learning process and to this day building projects is my preffered way of improving my skill set.</p>}
                {language === 'ro' ? <p>Urmatorul pas si obiectivul meu personal si profesional pe termen scurt este <span className={dark ? classes.highlightedDark : classes.highlightedLight}>obtinerea unui job in domeniul programarii web</span>, unde imi doresc sa gasesc oameni de la care sa invat cat mai mult posibil pentru ca ulterior sa pot progresa catre un rol de full-stack. </p> : <p>The next step and also my personal and professional short term goal is to <span className={dark ? classes.highlightedDark : classes.highlightedLight}>get a job as a web developer</span> and hopefully find an environment that will help me learn and progress into a full stack role.</p>}
            </div>
        </div>
        <div className={classes.skills}>
            <p className={classes.preTitle2}><span className={classes.beforeSpan2}></span>{language === 'ro' ? displayedText.preTitle2.ro : displayedText.preTitle2.eng}<span className={classes.afterSpan2}></span></p>
            <h2>{language === 'ro' ? displayedText.title2.ro : displayedText.title2.eng}</h2>
            <div className={classes.skillBox}>
                <div className={classes.logoWrapper}>
                    <p className={classes.skillTitle}>Html</p>
                    <SvgHtml5 size='7.2rem'/>
                </div>
                <div className={classes.logoWrapper}>
                    <p className={classes.skillTitle}>Css</p>
                    <SvgCss size='7.2rem'/>
                </div>
                <div className={classes.logoWrapper}>
                    <p className={classes.skillTitle}>Sass</p>
                    <SvgSass />
                </div>
                <div className={classes.logoWrapper}>
                    <p className={classes.skillTitle}>Javascript ES6</p>
                    <SvgJavascript />
                </div>
                <div className={classes.logoWrapper}>
                    <p className={classes.skillTitle}>React</p>
                    <SvgReact />
                </div>
                <div className={classes.logoWrapper}>
                    <p className={classes.skillTitle}>Redux</p>
                    <SvgRedux />
                </div>
                <div className={classes.logoWrapper}>
                    <p className={classes.skillTitle}>Firebase</p>
                    <SvgFirebase />
                </div>
                <div className={classes.logoWrapper}>
                    <p className={classes.skillTitle}>Git</p>
                    <SvgGit />
                </div>
                <div className={classes.logoWrapper}>
                    <p className={classes.skillTitle}>Rest API</p>
                    <SvgRestApi />
                </div>
            </div>
        </div>
    </section>
});

export default About;