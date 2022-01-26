import React from 'react';
import { useContext } from 'react';
import { useRef, useImperativeHandle } from 'react';
import classes from './Contact.module.css';

import GlobalState from '../store/store';

const Contact = React.forwardRef((props, ref) => {
    const contactRef = useRef();
    const ctx = useContext(GlobalState);

    const dark = ctx.darkMode;
    const language = ctx.currentLanguage;

    const navigate = () => {
        contactRef.current.scrollIntoView({behavior: 'smooth'});
    };

    useImperativeHandle(ref, () => {
        return {
            goToContact: navigate
        };
    });

    const displayedText = {
        title: {
            ro: 'Contacteaza-ma!',
            eng: 'Contact me!'
        },
        desc: {
            ro: 'Daca vrei sa imi lasi un mesaj, poti sa o faci prin email la adresa de mai jos. Voi face tot posibilul sa raspund cat mai curand !',
            eng: 'If you want to get in touch with me, you can do it via e-mail by pressing the button below. I will try my best to get back to you as fast as possible!'
        },
        button: {
            ro: 'Trimite-mi un email',
            eng: 'E-mail me'
        }
    }


    return <div className={`${classes.contactWrapper} ${dark ? classes.contactWrapperDark : classes.contactWrapperLight}`} ref={contactRef}>
        <h2 className={classes.contactTitle}>{language === 'ro' ? displayedText.title.ro : displayedText.title.eng}</h2>
        <p className={classes.contactDescription}>{language === 'ro' ? displayedText.desc.ro : displayedText.desc.eng}</p>
        <a href='mailto:alexandrumiroiu@gmail.com' className={`${classes.emailBtn} ${dark ? classes.emailBtnDark : classes.emailBtnLight}`}>{language === 'ro' ? displayedText.button.ro : displayedText.button.eng}</a>
    </div>
})

export default Contact;