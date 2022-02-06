import React from "react";
import { useState } from "react";

import classes from './rangeInput.module.css';

const RangeInput = () => {
    const [inputval, setInputval] = useState(6);

    const changeInputValue = (event) => {
        setInputval(event.target.value);
    }

    return (
        <div className={classes.slider}>
            <div className={classes.showValue}>
                {inputval}
            </div>
            <input type='range' className={classes.customSlider} onChange={changeInputValue} min='6' max='24' value={inputval} steps='1'></input>
        </div>)
}

export default RangeInput;