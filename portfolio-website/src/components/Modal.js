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

const ModalElement = (props) => {
    const ctx = useContext(GlobalState);
    const dark = ctx.darkMode;

    const closeModalHandler = () => {
    ctx.changeModalState();
    document.body.style.overflowY = 'unset';
    }


    return <div className={`${classes.modal} ${dark ? classes.modalDark : classes.modalLight}`}>
            <SvgNoFolder className={classes.image}/>
            <h2>{props.messageTitle}</h2>
            <p>{ctx.formatMessage}</p>
            <button onClick={closeModalHandler} className={`${classes.modalBtn} ${dark ? classes.modalBtnDark : classes.modalBtnLight}`}>Inchide</button>
    </div>
}

const Modal = (props) => {
    const title = 'Imi pare rau !';

    return  <Fragment>
                {ReactDOM.createPortal(<Backdrop />, document.getElementById('backdrop'))}
                {ReactDOM.createPortal(<ModalElement messageTitle={title} />, document.getElementById('modal'))}
            </Fragment>
}

export default Modal;