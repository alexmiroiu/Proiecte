
import classes from './FoodItem.module.css';

const FoodItem = (props) => {


    return (
        <div className={classes.foodItem}>
            <img src={props.image} alt='food item' />
            <div className={classes.titleContainer}>
                <h2>{props.name}</h2>
            </div>
            <div className={classes.itemMenu}>
                <button className={`${classes.menuBtn}  ${classes.detailsBtn}`} >Detalii</button>
                <button className={`${classes.menuBtn}  ${classes.deleteBtn}`} >Sterge</button>
            </div>
            {/* {itemModal && <FoodModal clickAction={closeModal} foodDetails={foodDetails}/>}
            {deleteItem && <DeleteItemModal showDeleteModal={deleteModalHandler} removeDeleteModal={cancelDelete} id={props.itemId} reRenderList={props.renderList}/>} */}
        </div>
    )
}

export default FoodItem;