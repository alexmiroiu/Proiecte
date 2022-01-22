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

    const navigate = () => {
        aboutRef.current.scrollIntoView({behavior: 'smooth'});
    };

    useImperativeHandle(ref, () => {
        return {
            goToAbout: navigate
        };
    });


    return <section className={`${classes.about} ${dark ? classes.aboutTextDark : classes.aboutTextLight}`} ref={aboutRef}>
        <div className={classes.info}>
            <p className={classes.preTitle1}><span className={classes.beforeSpan1}></span>Cateva cuvinte<span className={classes.afterSpan1}></span></p>
            <h2>Despre mine</h2>
            <div className={classes.details}>
                <p>Salut! Eu sunt Alex, un web developer la inceput de drum. Desi lucrez in domeniul vanzarilor de medicamente de mai bine de zece ani, in anul 2019 am inceput sa invat despre programarea web si la scurt timp am realizat ca vreau o schimbare de cariera in acest domeniu.</p>
                <p>Cu toate ca am acumulat majoritatea cunostintelor din carti, cursuri on-line si alte surse de pe internet, in 2019 am decis sa urmez cursul de front-end web development al celor de la Link Academy, pe care l-am absolvit in 2020. </p>
                <p>Din dorinta de a exersa si de a pune in aplicare ce am invatat, vara trecuta am inceput sa lucrez la mici proiecte personale, lucru care m-a ajutat sa ma dezvolt mult mai accelerat. La momentul actual continui sa invat in fiecare zi si caut proiecte din ce in ce mai indraznete cu care sa imi pun la incercare cunostintele.</p>
                <p> Urmatorul pas si obiectivul meu personal si profesional pe termen scurt este obtinerea unui job in domeniul programarii web, unde imi doresc sa gasesc oameni de la care sa invat cat mai mult posibil pentru a ajunge un programator capabil sa faca fata oricarui proiect. </p>
            </div>
        </div>
        <div className={classes.skills}>
            <p className={classes.preTitle2}><span className={classes.beforeSpan2}></span>Stiu sa lucrez cu urmatoarele<span className={classes.afterSpan2}></span></p>
            <h2>Tehnologii web</h2>
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