import { useDispatch} from 'react-redux';
import classes from './generate.module.css';
import { pwActions } from '../store/generate-password';


const Generate = () => {
    const dispatch = useDispatch();

    const generatePassword = () => {
        dispatch(pwActions.combineChoices());
    }

    return <button className={classes.btn} onClick={generatePassword}>Generate password</button>
}

export default Generate;