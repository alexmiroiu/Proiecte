import classes from './password.module.css';
import CopyIcon from '../assets/clipboard.svg';


const Password = () => {

    return <div className={classes.passwordContainer}>
        <h3 className={classes.password}>Your new password will appear here</h3>
        <div className={classes.copyBtn}>
            <img className={classes.copy} src={CopyIcon} alt='copy to clipboard icon' />
        </div>
    </div> 
}

export default Password;