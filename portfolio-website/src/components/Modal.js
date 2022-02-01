import React, { Fragment }  from "react";
import { useContext } from "react";
import ReactDOM from 'react-dom';

import SvgNoFolder from './iconComponents/NoFolder';
import GlobalState from "../store/store";

import classes from './Modal.module.css';

const Backdrop = () => {
    const ctx = useContext(GlobalState);
    const dark = ctx.darkMode;

    return <div className={`${classes.backdrop} ${dark ? classes.backdropDark : classes.backdropLight}`}></div>
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

    return  <div className={`${classes.modal} ${dark ? classes.modalDark : classes.modalLight}`}>
                <h2>Selecteaza limba in care doresti sa vizualizezi CV-ul</h2>
                <div className={classes.buttonsWrapper}>
                    <a className={classes.modalBtn}>RO</a>
                    <a className={classes.modalBtn}>ENG</a>
                </div>
            </div>
}

export const ResumeModalComponent = () => {

    return  <Fragment>
    {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop'))}
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

    return  <Fragment>
                {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop'))}
                {ReactDOM.createPortal(<DocumentModalElement messageTitle={language === 'ro' ? title.ro : title.eng} />, document.getElementById('modal'))}
            </Fragment>
}

export default Modal;