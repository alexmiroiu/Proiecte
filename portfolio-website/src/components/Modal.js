import React, { Fragment }  from "react";
import { useContext } from "react";
import ReactDOM from 'react-dom';

import SvgNoFolder from './iconComponents/NoFolder';
import SvgResume from './iconComponents/Resume';
import GlobalState from "../store/store";

import classes from './Modal.module.css';

const Backdrop = (props) => {
    const ctx = useContext(GlobalState);
    const dark = ctx.darkMode;

    return <div onClick={props.close} className={`${classes.backdrop} ${dark ? classes.backdropDark : classes.backdropLight}`}></div>
}

const DocumentModalElement = (props) => {
    const ctx = useContext(GlobalState);
    const dark = ctx.darkMode;
    const language = ctx.currentLanguage;

    const closeModalHandler = () => {
    ctx.changeProjectModalState();
    document.body.style.overflowY = 'unset';
    }

    const btnText = {
        ro: 'Inchide',
        eng: 'Close'
    }

    return <div className={`${classes.modal} ${dark ? classes.modalDark : classes.modalLight}`}>
            <SvgNoFolder className={classes.image}/>
            <h2>{props.messageTitle}</h2>
            <p>{ctx.formatMessage}</p>
            <button onClick={closeModalHandler} className={`${classes.modalBtn} ${dark ? classes.modalBtnDark : classes.modalBtnLight}`}>{language === 'ro' ? btnText.ro : btnText.eng}</button>
    </div>
}

const ResumeModalElement = () => {
    const ctx = useContext(GlobalState);
    const dark = ctx.darkMode;
    const language = ctx.currentLanguage;
    const format = ctx.format;

    const closeAfterClick = () => {
        ctx.changeResumeModalState();
        if(format === 'Desktop') {
            document.body.style.overflowY = 'unset';
        }
    }

    const modalText = {
            ro: 'Selecteaza limba in care doresti sa vizualizezi CV-ul',
            eng: 'Please select resume language'
    }

    return  <div className={`${classes.modal} ${dark ? classes.modalDark : classes.modalLight}`}>
                <SvgResume className={classes.resumeImage}/>
                <p className={classes.resumeTitle}>{language === 'ro' ? modalText.ro : modalText.eng}</p>
                <div className={classes.buttonsWrapper}>
                    <a onClick={closeAfterClick} href="https://docdro.id/wW0Do66" target="_blank" rel="noreferrer noopener"><button className={`${classes.modalBtn} ${classes.resumeButton} ${dark ? classes.modalBtnDark : classes.modalBtnLight}`}>Ro</button></a>
                    <a onClick={closeAfterClick} href="https://docdro.id/XJOBQnD" target="_blank" rel="noreferrer noopener"><button className={`${classes.modalBtn} ${classes.resumeButton} ${dark ? classes.modalBtnDark : classes.modalBtnLight}`}>En</button></a>
                </div>
            </div>
}

export const ResumeModalComponent = () => {
    const ctx = useContext(GlobalState);

    const closeResumeModal = () => {
        ctx.changeResumeModalState();
        document.body.style.overflowY = 'unset';
    }

    return  <Fragment>
    {ReactDOM.createPortal(<Backdrop close={closeResumeModal}/>, document.getElementById('backdrop'))}
    {ReactDOM.createPortal(<ResumeModalElement />, document.getElementById('modal'))}
    </Fragment>
}

const Modal = (props) => {
    const ctx = useContext(GlobalState);
    const language = ctx.currentLanguage;

    const title = {
        ro: 'Imi pare rau!',
        eng: 'I\'m sorry !'
    }

    const closeModal = () => {
        ctx.changeProjectModalState();
        document.body.style.overflowY = 'unset';
    }

    return  <Fragment>
                {ReactDOM.createPortal(<Backdrop close={closeModal} />, document.getElementById('backdrop'))}
                {ReactDOM.createPortal(<DocumentModalElement messageTitle={language === 'ro' ? title.ro : title.eng} />, document.getElementById('modal'))}
            </Fragment>
}

export default Modal;