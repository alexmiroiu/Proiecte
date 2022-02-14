import { useEffect } from "react";
import { useSelector } from "react-redux";

import classes from './AddFoodForm.module.css';

const AddFoodForm = () => {
    const modalActive = useSelector(state => state.modal.modalActive);

    useEffect(() => {
        //use effectul pentru validare form
    },[])

    return 
}

export default AddFoodForm;