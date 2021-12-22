import classes from './Hero.module.css';
import profilePic from '../assets/profile.jpg';
import scrollIcon from '../assets/icons/scrollBlue.png';

const Hero = () => {
    return <section className={classes.hero}>
        <div className={classes.profilePicContainer}>
            <div className={classes.imageWrapper}>
                <img src={profilePic} alt="profile" />
            </div>
        </div>

        <div className={classes.scroll}>
            <img src={scrollIcon} alt='scroll' />
        </div>

        <article className={classes.heroInfo}>
            <p className={classes.heroName}>Alexandru Miroiu,</p>
            <div className={classes.heroTitle}>
                <p>front-end</p>
                <p>web</p>
                <p>developer</p>
            </div>
            <p className={classes.heroDescription}>La momentul actual programarea web a devenit pasiunea mea si urmaresc o schimbare de cariera in acest domeniu. Obiectivul meu este sa creez sau sa contribui la crearea de aplicatii web moderne, cu tehnologii curente care sa fie folosite de cat mai multi utilizatori.</p>
        </article>

        <div className={classes.waves}></div>
    </section>
}

export default Hero;