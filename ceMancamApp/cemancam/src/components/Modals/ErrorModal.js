import React, { Fragment } from "react";
import ReactDOM  from "react-dom";
import styles from './ErrorModal.module.css';

const Backdrop = () => {
    return <div className={styles.backdrop}></div>;
}

const Modal = (props) => {
    return (
        <div className={styles.errorModal}>
            <h3>{props.errorMessage}</h3>
            <p className={styles.errorDescription}>{props.errorDescription}</p>
            <button className={styles.modalBtn} onClick={props.clickAction}>Close</button>
        </div>
    )
}

const teleportTarget = document.getElementById('overlay');

const ErrorModal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />, teleportTarget)}
            {ReactDOM.createPortal(<Modal errorMessage={props.message} errorDescription={props.description} clickAction={props.closeModal}/>, teleportTarget)}
        </Fragment>
    );
}

export default ErrorModal;