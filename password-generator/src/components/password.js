import classes from './password.module.css';
import CopyIcon from '../assets/copyIcon.svg';

const Password = () => {

    return <div className={classes.passwordContainer}>
        <h3 className={classes.password}>Your new password will appear here</h3>
        <img className={classes.copy} src={CopyIcon} alt='copy to clipboard icon' />
    </div> 
}

export default Password;