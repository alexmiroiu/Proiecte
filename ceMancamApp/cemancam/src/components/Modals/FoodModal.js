import React, { Fragment } from "react";
import ReactDOM  from "react-dom";
import styles from './FoodModal.module.css';
import clock from '../../assets/clock.svg';

const Backdrop = () => {
    return <div className={styles.backdrop}></div>;
}

const Modal = (props) => {


    return (
        <div className={styles.foodModal}>
            <h3>{props.name}</h3>
            <div className={styles.timeWrapper}>
            <img src={clock} alt='clock' />
            <p className={styles.errorDescription}>{props.time} min</p>
            </div>
            <p className={styles.errorDescription}>{props.recipe}</p>
            <p className={styles.errorDescription}>{props.type}</p>
            <img src={props.image} alt='food item' />
            <button className={styles.modalBtn} onClick={props.clickAction}>Inchide</button>
        </div>
    )
}

const teleportTarget = document.getElementById('overlay');

const FoodModal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />, teleportTarget)}
            {ReactDOM.createPortal(<Modal name={props.foodDetails.name} time={props.foodDetails.time} recipe={props.foodDetails.recipe} type={props.foodDetails.type} image={props.foodDetails.imageUrl} clickAction={props.clickAction}/>, teleportTarget)}
        </Fragment>
    );
}

export default FoodModal;