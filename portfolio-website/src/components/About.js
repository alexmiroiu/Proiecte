import classes from './About.module.css';

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
                <div>item1</div>
                <div>item2</div>
                <div>item3</div>
                <div>item4</div>
                <div>item5</div>
            </div>
        </div>
    </section>
}

export default About;