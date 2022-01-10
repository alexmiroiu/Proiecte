import React from 'react';
import { useRef, useImperativeHandle } from 'react';
import classes from './Contact.module.css';

const Contact = React.forwardRef((props, ref) => {
    const contactRef = useRef();

    const navigate = () => {
        contactRef.current.scrollIntoView({behavior: 'smooth'});
    };

    useImperativeHandle(ref, () => {
        return {
            goToContact: navigate
        };
    });


    return <div className={classes.contactWrapper} ref={contactRef}>
        <h2 className={classes.contactTitle}>Contacteaza-ma!</h2>
        <p className={classes.contactDescription}>Daca vrei sa imi lasi un mesaj, poti sa o faci prin email la adresa de mai jos. Voi face tot posibilul sa raspund cat mai curand !</p>
        <a href='mailto:alexandrumiroiu@gmail.com' className={classes.emailBtn}>Trimite-mi un email</a>
    </div>
})

export default Contact;