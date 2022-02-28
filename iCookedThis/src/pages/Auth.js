
import { useState } from 'react';
import classes from './Auth.module.css';

const Auth = () => {
    const [hasAccount, setHasAccount] = useState(true);

    const switchAuthForm = () => {
        setHasAccount(prevState => !prevState)
    }

    return  <div className={classes.authWrapper}>
                {!hasAccount && <h1 className={classes.authTitle}>Creeaza un cont</h1>}
                {hasAccount && <h1 className={classes.authTitle}>Intra in contul tau</h1>}
                <form className={classes.authForm}>
                    {!hasAccount && <div className={classes.inputWrapper}>
                        <label htmlFor='name' >Nume</label>
                        <input type="text" placeholder="Numele tau" name='name' />
                    </div>}
                    <div className={classes.inputWrapper}>
                        <label htmlFor='email'>Adresa de email</label>
                        <input type="email" name='email' placeholder='Introdu o adresa de email valida' />
                    </div>
                    <div className={classes.inputWrapper}>
                        <label htmlFor='password'>Parola</label>
                        <input type="password" name='password' />
                    </div>
                    {!hasAccount && <button className={classes.sendBtn}>Creeaza cont</button>}
                    {hasAccount && <button className={classes.sendBtn}>Intra in cont</button>}
                </form>

                {!hasAccount && <p className={classes.switch}>Daca ai deja cont, <span onClick={switchAuthForm}>apasa aici</span> pentru a te conecta!</p>}
                {hasAccount && <p className={classes.switch}>Daca nu ai creat un cont, <span onClick={switchAuthForm}>apasa aici</span> pentru a te inregistra!</p>}

            </div>
}

export default Auth;