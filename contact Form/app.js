class FormHandler {
    firstNameValidator = false;
    lastNameValidator = false;
    userNameValidator = false;
    passwordValidator = false;
    emailValidator = false;


    constructor(fname, lname, username, pw, mail, msg) {
        this.firstName = fname;
        this.lastName = lname;
        this.username = username;
        this.password = pw;
        this.email = mail;
        this.message = msg;
    }

    validateName (event) {
        const regExName = /^[\w'\-,.]*[^_!¡?÷?¿\/\\+=@#$%ˆ&*(){}|~<>;:[\]]*$/i;
        if(event.target.name === 'fname') {
            if(regExName.test(this.firstName.value) && this.firstName.value.length > 1 && this.firstName.value.length < 40) {
                this.firstNameValidator = true;
            } else {
                this.firstNameValidator = false;
            }
        }
        if(event.target.name === 'lname') {
            if(regExName.test(this.lastName.value && this.lastName.value.length > 1) && this.lastName.value.length < 40) {
                this.lastNameValidator = true;
            } else {
                this.lastNameValidator = false;
            }
        }
        if(event.target.name === 'username') {
            if(regExName.test(this.username.value) && this.username.value.length > 3 && this.username.value.length < 25) {
                this.userNameValidator = true;
            } else {
                this.userNameValidator = false;
            }
        }

    }

}


const firstName = document.querySelector('#fname');
const lastName = document.getElementById('lname');
const userName = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email');
const message = document.getElementById('message');

const errorColor = '#FF6B6B';

const formHandler = new FormHandler(firstName, lastName, userName, password, email, message);


firstName.addEventListener('input', (e) => {
    formHandler.validateName(e);
    if(!formHandler.firstNameValidator) {
        firstName.style.color = errorColor;
    }
    if(formHandler.firstNameValidator) {
        firstName.style.color = 'var(--text)';
    }
})

lastName.addEventListener('input', (e) => {
    formHandler.validateName(e);
    if(!formHandler.lastNameValidator) {
        lastName.style.color = errorColor;
    }
    if(formHandler.lastNameValidator) {
        lastName.style.color = 'var(--text)';
    }
})

userName.addEventListener('input', (e) => {
    formHandler.validateName(e);
    if(!formHandler.userNameValidator) {
        userName.style.color = errorColor;
    }
    if(formHandler.userNameValidator) {
        userName.style.color = 'var(--text)';
    }
})

// firstName.addEventListener('input', () => {
//     console.log(firstName.value)
// })

// window.addEventListener('load', () => {
//     document.querySelector('form').style.display = 'none';
// })
