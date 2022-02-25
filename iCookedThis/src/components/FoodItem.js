import { Link } from 'react-router-dom';
import classes from './FoodItem.module.css';

const FoodItem = (props) => {


    return (
        <div className={classes.foodItem}>
            <img src={props.image} alt='food item' />
            <div className={classes.titleContainer}>
                <h2>{props.name}</h2>
            </div>
            <div className={classes.itemMenu}>
                <Link to={`/food-items/${props.itemId}`} className={`${classes.menuBtn}  ${classes.detailsBtn}`} >Detalii</Link>
                
            </div>
            {/* {deleteItem && <DeleteItemModal showDeleteModal={deleteModalHandler} removeDeleteModal={cancelDelete} id={props.itemId} reRenderList={props.renderList}/>} */} 
        </div>
    )
}

export default FoodItem;