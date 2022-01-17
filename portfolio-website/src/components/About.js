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

import Theme from '../store/theme';

const About = React.forwardRef((props, ref) => {
    const aboutRef = useRef();
    const ctx = useContext(Theme);

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
                <h4>Salut! Eu sunt Alex</h4>
                <p>Inca de mic am fost pasionat de tehnologie, dar in special de calculatoare. Tin minte si acum emotia pe care o traiam la sfarsitul orelor de informatica, in scoala primara, atunci cand ora se termina si navigam prin MS-DOS cautand executabila jocului "Prehistorik". In liceu am luat contact cu programarea in C++, facand parte dintr-o clasa de profil "informatica-intensiv", insa maniera abstracta de predare a profesorului nu m-a convins sa continui mai departe in acest domeniu. Anii au trecut si datorita faptului ca sunt o fire deschisa si comunicativa am ajuns sa lucrez in domeniul vanzarilor de medicamente.</p>
                <p>Am descoperit programarea web pe "Youtube" si am realizat ca mi-ar placea sa aprofundez, de aceea in 2019 m-am inscris la cursul de front-end web development al celor de la Link Academy. In paralel, din dorinta de a invata mai mult si mai repede, am recurs la carti ("Head First Javascript" si "Head First HTML and CSS"), cursuri pe platforma Udemy, freecodecamp.org si altele. </p>
                <p>Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Nisi est sit amet facilisis magna etiam tempor.</p>
                <p>Mauris pharetra et ultrices neque ornare aenean euismod elementum. Massa tincidunt dui ut ornare lectus sit amet. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Massa ultricies mi quis hendrerit dolor magna eget. Convallis tellus id interdum velit laoreet id donec. Et pharetra pharetra massa massa ultricies mi. Dignissim diam quis enim lobortis scelerisque fermentum. Pellentesque massa placerat duis ultricies lacus sed.</p>
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