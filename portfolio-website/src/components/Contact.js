import classes from './Contact.module.css';

const Contact = () => {
    return <div className={classes.contactWrapper} id='#contact'>
        <h2 className={classes.contactTitle}>Contacteaza-ma!</h2>
        <p className={classes.contactDescription}>Daca vrei sa imi lasi un mesaj, poti sa o faci prin email la adresa de mai jos. Voi face tot posibilul sa raspund cat mai curand !</p>
        <a href='mailto:alexandrumiroiu@gmail.com'>Send an email</a>
    </div>
}

export default Contact;