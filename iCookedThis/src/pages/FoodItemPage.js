import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Fragment } from 'react/cjs/react.production.min';
import { Link, useParams } from 'react-router-dom';

import { getFoodItems } from '../store/FoodListSlice';
import { modalActions } from '../store/ModalSlice';

import DeleteItemModal from '../components/Modals/DeleteItemModal';
import clock from '../assets/clock.svg';

import classes from './FoodItemPage.module.css';


const FoodItemPage = () => {
    const modalActive = useSelector(state => state.modal.modalActive);
    const dispatch = useDispatch();
    const params = useParams();
    const itemId = params.id;
    const foodList = JSON.parse(localStorage.getItem('foodList'));


    const foodItem = foodList.find(item => item.id === itemId);
    
    window.onpopstate = e => {
        dispatch(modalActions.changeModalState(false));
        return () => {
            window.removeEventListener('onpopstate')
        }
    }

    const showDeleteModal = () => {
        dispatch(modalActions.changeModalState(true));
        console.log(modalActive)
    }


    return <Fragment>
            <div className={classes.imageWrapper}>
                <img src={foodItem.image} alt='food item' className={classes.mainImage}/>
                <div className={classes.timeWrapper}>
                    <img src={clock} alt='clock' className={classes.icon}/>
                    <p className={classes.time}>{foodItem.time} min</p>
                </div>
                <p className={classes.type}>{foodItem.type}</p>
            </div>
            <h3>{foodItem.name}</h3>
            <div className={classes.recipeWrapper}>
                <h4>Reteta</h4>
                <p className={classes.errorDescription}>{foodItem.recipe}</p>
            </div>
            <Link to='/food-items' className={classes.modalBtn}>Inchide</Link>
            <button  className={classes.modalBtn} onClick={showDeleteModal}>Sterge</button>
            {modalActive && <DeleteItemModal id={itemId} />}
            </Fragment>

}

export default FoodItemPage;