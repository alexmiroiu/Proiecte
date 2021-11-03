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
            <div className={styles.imageWrapper}>
                <img src={props.image} alt='food item' className={styles.mainImage}/>
                <div className={styles.timeWrapper}>
                    <img src={clock} alt='clock' className={styles.icon}/>
                    <p className={styles.time}>{props.time} min</p>
                </div>
                <p className={styles.type}>{props.type}</p>
            </div>
            <h3>{props.name}</h3>
            <div className={styles.recipeWrapper}>
                <h4>Reteta</h4>
                <p className={styles.errorDescription}>{props.recipe}</p>
            </div>
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