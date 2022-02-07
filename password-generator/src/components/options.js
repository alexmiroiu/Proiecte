import { useDispatch, useSelector } from 'react-redux';
import classes from './options.module.css';
import RangeInput from './rangeInput';
import { pwActions } from '../store/generate-password';

const Options = () => {
    const dispatch = useDispatch();
    const numbersValue = useSelector(state => state.numbersChecked);
    const symbolsValue = useSelector(state => state.symbolsChecked);
    const lowercaseValue = useSelector(state => state.lowercaseChecked);
    const uppercaseValue = useSelector(state => state.uppercaseChecked);

    const changeNumbersHandler = () => {
        dispatch(pwActions.changeNumbers());
    }
    const changeSymbolsHandler = () => {
        dispatch(pwActions.changeSymbols())
    }
    const changeLowercaseHandler = () => {
        dispatch(pwActions.changeLowercase());
    }
    const changeUppercaseHandler = () => {
        dispatch(pwActions.changeUppercase())
    }

    return <div className={classes.optionsContainer}>
            <h2>Options</h2>
            <div className={classes.optionsWrapper}>
                <div className={classes.lengthWrapper}>
                    <p className={classes.optionName}>Password length:</p>
                    <RangeInput />
                </div>
                <div className={classes.optionWrapper}>
                    <p className={classes.optionName}>Include numbers:</p>
                    <div className={classes.descriptionWrapper}>
                        <label className={classes.checkBox}>
                            <input className={classes.check} type="checkbox" checked={numbersValue} onChange={changeNumbersHandler}/>
                            <svg className={classes.svgCheck} width="29" height="29">
                                <polyline points="20 5 9 17 4 12"></polyline>
                            </svg>
                        </label>
                        <p className={classes.optionDesc}>(e.g. 1234567)</p>
                    </div>
                </div>
                <div className={classes.optionWrapper}>
                    <p className={classes.optionName}>Include symbols:</p>
                    <div className={classes.descriptionWrapper}>
                        <label className={classes.checkBox}>
                            <input className={classes.check} type="checkbox" checked={symbolsValue} onChange={changeSymbolsHandler} />
                            <svg className={classes.svgCheck} width="29" height="29">
                                <polyline points="20 5 9 17 4 12"></polyline>
                            </svg>
                        </label>
                        <p className={classes.optionDesc}>(e.g. @#$%)</p>
                    </div>
                </div>
                <div className={classes.optionWrapper}>
                    <p className={classes.optionName}>Include lowercase characters:</p>
                    <div className={classes.descriptionWrapper}>
                        <label className={classes.checkBox}>
                            <input className={classes.check} type="checkbox" checked={lowercaseValue} onChange={changeLowercaseHandler} />
                            <svg className={classes.svgCheck} width="29" height="29">
                                <polyline points="20 5 9 17 4 12"></polyline>
                            </svg>
                        </label>
                        <p className={classes.optionDesc}>(e.g. abcdefgh)</p>
                    </div>
                </div>
                <div className={classes.optionWrapper}>
                    <p className={classes.optionName}>Include uppercase characters:</p>
                    <div className={classes.descriptionWrapper}>
                        <label className={classes.checkBox}>
                            <input className={classes.check} type="checkbox" checked={uppercaseValue} onChange={changeUppercaseHandler}/>
                            <svg className={classes.svgCheck} width="29" height="29">
                                <polyline points="20 5 9 17 4 12"></polyline>
                            </svg>
                        </label>
                        <p className={classes.optionDesc}>(e.g. ABCDEFGH)</p>
                    </div>
                </div>
            </div>
    </div>

}

export default Options