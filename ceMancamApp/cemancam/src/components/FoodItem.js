import React, { useState, useContext } from "react";
import styles from './FoodItem.module.css';
import DeleteItemModal from "./Modals/DeleteItemModal";
import FoodModal from "./Modals/FoodModal";
import ModalHelper from "../store/modal-helper";

const FoodItem = (props) => {
    const ctx = useContext(ModalHelper);
    const [itemModal, setItemModal] = useState(false);
    const [deleteItem, setDeleteItem] = useState(false);


    const shortRecipe = () => {
        let maxLength = 10;
        let shortenedRecipe = props.recipe.slice(0, maxLength);
        while(shortenedRecipe.charAt(maxLength-1) === '.' ||
        shortenedRecipe.charAt(maxLength-1) === ',' || (/[a-zA-Z]/).test(shortenedRecipe.charAt(maxLength-1))) {
            if(maxLength === 15) {
                break;
            }
            maxLength++;
            shortenedRecipe = props.recipe.slice(0, maxLength);
        } 
        return shortenedRecipe + '...';

    }

    const deleteModalHandler = () => {
        setDeleteItem(true);
    }

    const cancelDelete = () => {
        setDeleteItem(false);
    }

    

    const foodDetails = {
        id: props.itemId,
        name: props.name, 
        time: props.time,
        recipe: props.recipe,
        type: props.type,
        imageUrl: props.image
    }

    const modalHandler = () => {
        setItemModal(true);
        ctx.setModalOn();
    }

    const closeModal = () => {
        setItemModal(false);
    }
    


    return (
        <div className={styles.foodItem}>
            <img src={props.image} alt='food item' />
            <div className={styles.titleContainer}>
                <h2>{props.name}</h2>
            </div>
            <div className={styles.itemMenu}>
                <button className={`${styles.menuBtn}  ${styles.detailsBtn}`} onClick={modalHandler}>Detalii</button>
                <button className={`${styles.menuBtn}  ${styles.deleteBtn}`} onClick={deleteModalHandler}>Sterge</button>
            </div>
            {itemModal && <FoodModal clickAction={closeModal} foodDetails={foodDetails}/>}
            {deleteItem && <DeleteItemModal showDeleteModal={deleteModalHandler} removeDeleteModal={cancelDelete} id={props.itemId} reRenderList={props.renderList}/>}
        </div>
    )
}

export default FoodItem;