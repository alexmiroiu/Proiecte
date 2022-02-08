import { useSelector } from 'react-redux';
import {CopyToClipboard} from 'react-copy-to-clipboard';

import classes from './password.module.css';
import CopyIcon from '../assets/clipboard.svg';


const Password = () => {
    const generatedPassword = useSelector(state => state.combined);
    const pwError = useSelector(state => state.pwError);

    return <div className={classes.passwordContainer}>
        <h3 className={`${classes.password} ${generatedPassword.length > 0 && !pwError ? classes.bold : ''} ${generatedPassword.length > 0 && pwError ? classes.pwError : ''}`}>{generatedPassword.length > 0 ? generatedPassword : `Your new password will appear here`}</h3>
        <CopyToClipboard text={generatedPassword}>
            <div className={classes.copyBtn}>
                <img className={classes.copy} src={CopyIcon} alt='copy to clipboard icon' />
            </div>
        </CopyToClipboard>
    </div> 
}

export default Password;