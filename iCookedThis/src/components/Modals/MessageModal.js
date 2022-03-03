import React, { Fragment } from "react";
import ReactDOM  from "react-dom";
import styles from './MessageModal.module.css';

const Backdrop = () => {
    return <div className={styles.backdrop}></div>;
}

const Modal = (props) => {
    return (
        <div className={styles.errorModal}>
            <h3>{props.message}</h3>
            <p className={styles.errorDescription}>{props.errorDescription}</p>
            <button className={styles.modalBtn} onClick={props.clickAction}>Inchide</button>
        </div>
    )
}

const teleportTarget = document.getElementById('overlay');

const MessageModal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />, teleportTarget)}
            {ReactDOM.createPortal(<Modal message={props.message} errorDescription={props.description} clickAction={props.closeModal}/>, teleportTarget)}
        </Fragment>
    );
}

export default MessageModal;