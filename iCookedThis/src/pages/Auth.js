
import classes from './Auth.module.css';

const Auth = () => {

    return  <div className={classes.authWrapper}>
                <h1>Creeaza un cont</h1>
                <form>
                    <label htmlFor='name' >Nume</label>
                    <input type="text" placeholder="Numele tau" name='name' />
                    <label htmlFor='email'>Adresa de email</label>
                    <input type="email" name='email' placeholder='Introdu o adresa de email valida' />
                    <label htmlFor='password'>Parola</label>
                    <input type="password" name='password' />
                    <button>Trimite</button>
                </form>
            </div>
}

export default Auth;