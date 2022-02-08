import classes from './strength.module.css';
import { useSelector } from 'react-redux';


const Strength = () => {
    const pwStrength = useSelector(state => state.strength);

    return <div className={`${classes.pwStrength} ${pwStrength.length > 0 ? classes.visible : classes.hidden}`}> 
        <p>Password strength:</p>
        <p>{pwStrength}</p>
    </div>
}

export default Strength;