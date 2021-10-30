import React, { Fragment } from "react";
import ReactDOM  from "react-dom";
import styles from './FoodModal.module.css';

const Backdrop = () => {
    return <div className={styles.backdrop}></div>;
}

const Modal = (props) => {
    return (
        <div className={styles.foodModal}>
            <h3>{props.name}</h3>
            <p className={styles.errorDescription}>{props.time}</p>
            <p className={styles.errorDescription}>{props.recipe}</p>
            <p className={styles.errorDescription}>{props.type}</p>
            <button className={styles.modalBtn} onClick={props.clickAction}>Inchide</button>
        </div>
    )
}

const teleportTarget = document.getElementById('overlay');

const FoodModal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />, teleportTarget)}
            {ReactDOM.createPortal(<Modal name={props.foodDetails.name} time={props.foodDetails.time} recipe={props.foodDetails.recipe} type={props.foodDetails.type} clickAction={props.clickAction}/>, teleportTarget)}
        </Fragment>
    );
}

export default FoodModal;