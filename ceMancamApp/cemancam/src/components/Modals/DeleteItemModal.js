import React, { Fragment } from "react";
import ReactDOM  from "react-dom";
import styles from './DeleteItemModal.module.css';

const Backdrop = () => {
    return <div className={styles.backdrop}></div>;
}

const Modal = (props) => {

    const deleteItem = async () => {
        const url = `https://cemancam-14798-default-rtdb.europe-west1.firebasedatabase.app/recipes/${props.id}.json`
        const request = await fetch(url, {method: 'DELETE'});
        const response = await request.json();
        console.log(response);
        props.removeModal();
        props.reRenderList();
    }

    return (
        <div className={styles.errorModal}>
            <h3>Esti sigur ca vrei sa stergi acest preparat?</h3>
            <div className={styles.buttonWrapper}>
                <button className={styles.modalBtn} onClick={deleteItem}>Da</button>
                <button className={styles.modalBtn} onClick={props.removeModal}>Anuleaza</button>
            </div>
        </div>
    )
}

const teleportTarget = document.getElementById('overlay');

const DeleteItemModal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop />, teleportTarget)}
            {ReactDOM.createPortal(<Modal showModal={props.showDeleteModal} removeModal={props.removeDeleteModal} id={props.id} reRenderList={props.reRenderList}/>, teleportTarget)}
        </Fragment>
    );
}

export default DeleteItemModal;