import classes from './About.module.css';
import html from '../assets/icons/html5.svg';
import css from '../assets/icons/css.svg';
import firebase from '../assets/icons/firebase.svg';
import git from '../assets/icons/git.svg';
import javascript from '../assets/icons/javascript.svg';
import react from '../assets/icons/react.svg';
import redux from '../assets/icons/redux.svg';
import rest from '../assets/icons/rest-api.svg';
import sass from '../assets/icons/sass.svg';

const About = () => {
    return <section className={classes.about}>
        <div className={classes.info}>
            <h2>Despre mine</h2>
            <div className={classes.details}>
                <p>Dictum sit amet justo donec enim. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Suspendisse sed nisi lacus sed viverra tellus. Mattis pellentesque id nibh tortor id aliquet. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium. Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Volutpat consequat mauris nunc congue nisi vitae. </p>
                <p>Etiam non quam lacus suspendisse faucibus. Tincidunt arcu non sodales neque sodales ut etiam. Viverra nam libero justo laoreet sit amet cursus sit. Mus mauris vitae ultricies leo integer malesuada nunc. Mi bibendum neque egestas congue quisque. A scelerisque purus semper eget duis. Amet nulla facilisi morbi tempus iaculis urna. Sit amet purus gravida quis blandit. </p>
                <p>Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Nisi est sit amet facilisis magna etiam tempor.</p>
                <p>Mauris pharetra et ultrices neque ornare aenean euismod elementum. Massa tincidunt dui ut ornare lectus sit amet. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Massa ultricies mi quis hendrerit dolor magna eget. Convallis tellus id interdum velit laoreet id donec. Et pharetra pharetra massa massa ultricies mi. Dignissim diam quis enim lobortis scelerisque fermentum. Pellentesque massa placerat duis ultricies lacus sed.</p>
            </div>
        </div>
        <div className={classes.skills}>
            <h2>Skills</h2>
            <div className={classes.skillBox}>
                <div className={classes.logoWrapper}>
                    <p className={classes.skillTitle}>Html</p>
                    <img src={html} alt="html" />
                </div>
                <div className={classes.logoWrapper}>
                    <p className={classes.skillTitle}>Css</p>
                    <img src={css} alt="css" />
                </div>
                <div className={classes.logoWrapper}>
                    <p className={classes.skillTitle}>Sass</p>
                    <img src={sass} alt="sass" />
                </div>
                <div className={classes.logoWrapper}>
                    <p className={classes.skillTitle}>Javascript ES6</p>
                    <img src={javascript} alt="javascript" />
                </div>
                <div className={classes.logoWrapper}>
                    <p className={classes.skillTitle}>React</p>
                    <img src={react} alt="react" />
                </div>
                <div className={classes.logoWrapper}>
                    <p className={classes.skillTitle}>Redux</p>
                    <img src={redux} alt="redux" />
                </div>
                <div className={classes.logoWrapper}>
                    <p className={classes.skillTitle}>Firebase</p>
                    <img src={firebase} alt="firebase" />
                </div>
                <div className={classes.logoWrapper}>
                    <p className={classes.skillTitle}>Git</p>
                    <img src={git} alt="git" />
                </div>
                <div className={classes.logoWrapper}>
                    <p className={classes.skillTitle}>Rest API</p>
                    <img src={rest} alt="rest" />
                </div>
            </div>
        </div>
    </section>
}

export default About;