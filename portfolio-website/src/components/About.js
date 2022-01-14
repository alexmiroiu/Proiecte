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
            <p className={classes.preTitle1}>Cateva cuvinte<span></span></p>
            <h2>Despre mine</h2>
            <div className={classes.details}>
                <p>Dictum sit amet justo donec enim. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Suspendisse sed nisi lacus sed viverra tellus. Mattis pellentesque id nibh tortor id aliquet. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Volutpat consequat mauris nunc congue nisi vitae. </p>
                <p>Etiam non quam lacus suspendisse faucibus. Tincidunt arcu non sodales neque sodales ut etiam. Viverra nam libero justo laoreet sit amet cursus sit. Mus mauris vitae ultricies leo integer malesuada nunc. Mi bibendum neque egestas congue quisque. A scelerisque purus semper eget duis. Amet nulla facilisi morbi tempus iaculis urna. Sit amet purus gravida quis blandit. </p>
                <p>Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Nisi est sit amet facilisis magna etiam tempor.</p>
                <p>Mauris pharetra et ultrices neque ornare aenean euismod elementum. Massa tincidunt dui ut ornare lectus sit amet. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Massa ultricies mi quis hendrerit dolor magna eget. Convallis tellus id interdum velit laoreet id donec. Et pharetra pharetra massa massa ultricies mi. Dignissim diam quis enim lobortis scelerisque fermentum. Pellentesque massa placerat duis ultricies lacus sed.</p>
            </div>
        </div>
        <div className={classes.skills}>
            <p className={classes.preTitle2}>Stiu sa lucrez cu urmatoarele<span></span></p>
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