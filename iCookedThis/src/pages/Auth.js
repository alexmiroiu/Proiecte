
import { useState, useRef, useEffect } from 'react';
import { signUp } from '../store/AuthSlice';
import classes from './Auth.module.css';

const signUpUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBp9q1OJDyKHB9lXn_DKjmkqPywz6EsVmo`;
const signInUrl = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBp9q1OJDyKHB9lXn_DKjmkqPywz6EsVmo`;

const Auth = () => {
    const [hasAccount, setHasAccount] = useState(true);
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();


    const switchAuthForm = () => {
        setHasAccount(prevState => !prevState)
    }

    const signUpHandler = (event) => {
        event.preventDefault();
        console.log(emailRef.current.value, passwordRef.current.value)
        signUp(signUpUrl, emailRef.current.value, passwordRef.current.value);
    }

    return  <div className={classes.authWrapper}>
                {!hasAccount && <h1 className={classes.authTitle}>Creeaza un cont</h1>}
                {hasAccount && <h1 className={classes.authTitle}>Intra in contul tau</h1>}
                <form className={classes.authForm}>
                    {!hasAccount && <div className={classes.inputWrapper}>
                        <label htmlFor='name' >Nume</label>
                        <input type="text" placeholder="Numele tau" name='name' ref={nameRef}/>
                    </div>}
                    <div className={classes.inputWrapper}>
                        <label htmlFor='email'>Adresa de email</label>
                        <input type="email" name='email' placeholder='Introdu o adresa de email valida' ref={emailRef} />
                    </div>
                    <div className={classes.inputWrapper}>
                        <label htmlFor='password'>Parola</label>
                        <input type="password" name='password' ref={passwordRef}/>
                    </div>
                    {!hasAccount && <button onClick={signUpHandler} className={classes.sendBtn}>Creeaza cont</button>}
                    {hasAccount && <button className={classes.sendBtn}>Intra in cont</button>}
                </form>

                {!hasAccount && <p className={classes.switch}>Daca ai deja cont, <span onClick={switchAuthForm}>apasa aici</span> pentru a te conecta!</p>}
                {hasAccount && <p className={classes.switch}>Daca nu ai creat un cont, <span onClick={switchAuthForm}>apasa aici</span> pentru a te inregistra!</p>}

            </div>
}

export default Auth;