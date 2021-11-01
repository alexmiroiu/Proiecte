import React, { useState } from "react";
import styles from './FoodItem.module.css';
import DeleteItemModal from "./Modals/DeleteItemModal";
import FoodModal from "./Modals/FoodModal";

const FoodItem = (props) => {
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
    }

    const closeModal = () => {
        setItemModal(false);
    }
    
    const forceRender = () => {
        props.reRender();
    }


    return (
        <div className={styles.foodItem}>
            <div className={styles.titleWrapper}>
                <div className={styles.titleContainer}>
                    <h2>{props.name}</h2>
                    <p>{props.type}</p>
                </div>
                <p>{props.time} min</p>
            </div>
            <div className={styles.recipe}>
                <h3>Reteta</h3>
                <p>{shortRecipe()}</p>
            </div>
            <img src={props.image} alt='food item' />
            <div className={styles.itemMenu}>
                <button className={`${styles.menuBtn}  ${styles.detailsBtn}`} onClick={modalHandler}>Detalii</button>
                <button className={`${styles.menuBtn}  ${styles.editBtn}`} onClick={forceRender}>Editeaza</button>
                <button className={`${styles.menuBtn}  ${styles.deleteBtn}`} onClick={deleteModalHandler}>Sterge</button>
            </div>
            {itemModal && <FoodModal clickAction={closeModal} foodDetails={foodDetails}/>}
            {deleteItem && <DeleteItemModal showDeleteModal={deleteModalHandler} removeDeleteModal={cancelDelete} id={props.itemId} reRenderList={props.renderList}/>}
        </div>
    )
}

export default FoodItem;