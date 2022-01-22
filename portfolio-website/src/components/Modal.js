import React, { Fragment }  from "react";
import { useContext } from "react";
import ReactDOM from 'react-dom';

import SvgSorry from './iconComponents/Sorry';
import Theme from "../store/theme";

import classes from './Modal.module.css';

const Backdrop = () => {
    return <div className={classes.backdrop}></div>
}

const ModalElement = (props) => {
    const ctx = useContext(Theme);


    return <div className={classes.modal}>
            <SvgSorry className={classes.image}/>
            <h2>{props.messageTitle}</h2>
            <p>{ctx.formatMessage}</p>
            <button>Inchide</button>
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