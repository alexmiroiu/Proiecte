import { React } from 'react';
import classes from './Footer.module.css';
import copyright from '../assets/icons/copyright.svg';

const Footer = () => {
    return <div className={classes.footer}>
        <img src={copyright} alt='copyright' />
        <p>Alex Miroiu 2022</p>
    </div>
}

export default Footer;