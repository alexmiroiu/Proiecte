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
        detailsP1: {
            ro: 'Salut! Eu sunt Alex, un front-end web developer junior orientat catre a invata cat mai mult posibil. Desi lucrez in domeniul vanzarilor de medicamente de mai bine de zece ani, in anul 2019 am inceput sa invat despre programarea web si la scurt timp am realizat ca vreau o schimbare de cariera in acest domeniu.',
            eng: 'Hi! I\'m Alex, a junior front-end web developer currently focused on learning as much as I can. Even though I\'ve been working as a sales representative in the Pharma industry for over 10 years, in 2019 I started learning web development and soon realised I want to change careers.'
        },
        detailsP2: {
            ro: 'Cu toate ca am acumulat majoritatea cunostintelor din carti, cursuri on-line si alte surse de pe internet, in 2019 am decis sa urmez cursul de front-end web development al celor de la Link Academy, pe care l-am absolvit in 2020. ',
            eng: 'Allthough I\'ve accumulated most of my knowledge from books, on-line courses and different other sources from around the internet, in late 2019 I decided to enroll in Link Academy\'s front-end web development course, which I finished and graduated in late 2020.'
        },
        detailsP3: {
            ro: 'Din dorinta de a exersa si de a pune in aplicare ce am invatat, vara trecuta am inceput sa lucrez la mici proiecte personale, lucru care m-a ajutat sa ma dezvolt mult mai accelerat. La momentul actual continui sa invat in fiecare zi si caut proiecte din ce in ce mai indraznete cu care sa imi pun la incercare cunostintele.',
            eng: 'Last summer I started working on some personal projects because I felt I needed to practice the things that I learned. I then realised that it speeded up my learning process and to this day building projects is my preffered way of improving my skill set.'
        },
        detailsP4: {
            ro: 'Urmatorul pas si obiectivul meu personal si profesional pe termen scurt este obtinerea unui job in domeniul programarii web, unde imi doresc sa gasesc oameni de la care sa invat cat mai mult posibil pentru ca ulterior sa pot progresa catre un rol de full-stack. ',
            eng: 'The next step and also my personal and professional short term goal is to get a job as a web developer and hopefully find an environment that will help me learn and progress into a full stack role.'
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
                <p>{language === 'ro' ? displayedText.detailsP1.ro : displayedText.detailsP1.eng}</p>
                <p>{language === 'ro' ? displayedText.detailsP2.ro : displayedText.detailsP2.eng}</p>
                <p>{language === 'ro' ? displayedText.detailsP3.ro : displayedText.detailsP3.eng}</p>
                <p>{language === 'ro' ? displayedText.detailsP4.ro : displayedText.detailsP4.eng}</p>
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