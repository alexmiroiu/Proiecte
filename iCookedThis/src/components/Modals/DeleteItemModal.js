import React, { Fragment } from "react";
import ReactDOM  from "react-dom";
import classes from './DeleteItemModal.module.css';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { modalActions } from "../../store/ModalSlice";
import { deleteFoodItem, getFoodItems } from "../../store/FoodListSlice";

const Backdrop = () => {
    return <div className={classes.backdrop}></div>;
}

const Modal = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const deleteItem = () => {
        dispatch(deleteFoodItem(props.id));
        navigate('/');

    }

    return (
        <div className={classes.errorModal}>
            <h3>Esti sigur ca vrei sa stergi acest preparat?</h3>
            <div className={classes.buttonWrapper}>
                <button className={classes.modalBtn} onClick={deleteItem}>Da</button>
                <button className={classes.modalBtn} onClick={() => {dispatch(modalActions.changeModalState(false))}}>Anuleaza</button>
            </div>
        </div>
    );
}

const teleportTarget = document.getElementById('overlay');

const DeleteItemModal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />, teleportTarget)}
            {ReactDOM.createPortal(<Modal id={props.id}/>, teleportTarget)}
        </Fragment>
    );
}

export default DeleteItemModal;