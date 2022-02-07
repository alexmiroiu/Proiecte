import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { pwActions } from "../store/generate-password";

import classes from './rangeInput.module.css';

const RangeInput = () => {
    const dispatch = useDispatch();
    const rangeValue = useSelector(state => state.passwordLength);

    const changeValueHandler = (event) => {
        dispatch(pwActions.changeLength(event.target.value));
    }

    return (
        <div className={classes.slider}>
            <div className={classes.showValue}>
                {rangeValue}
            </div>
            <input type='range' className={classes.customSlider} onChange={changeValueHandler}  min='6' max='24' value={rangeValue} steps='1'></input>
        </div>)
}

export default RangeInput;