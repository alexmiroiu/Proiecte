import React, { Fragment } from "react";
import ReactDOM  from "react-dom";
import styles from './ErrorModal.module.css';

const Backdrop = () => {
    return <div className={styles.backdrop}></div>;
}

const Modal = () => {
    return (
        <div className={styles.errorModal}>
            {/* <h3>{props.errorMessage}</h3> */}
            <h3>Error message here</h3>
            <button>Close</button>
        </div>
    )
}

const teleportTarget = document.getElementById('overlay');

const ErrorModal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />, teleportTarget)}
            {ReactDOM.createPortal(<Modal />, teleportTarget)}
        </Fragment>
    );
}

export default ErrorModal;