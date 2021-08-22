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

    validateFirstName () {
        const regEx = /^[\w'\-,.]*[^_!¡?÷?¿\/\\+=@#$%ˆ&*(){}|~<>;:[\]]*$/i;
        if(regEx.test(this.firstName.value)) {
            this.firstNameValidator = true;
        } else {
            this.firstNameValidator = false;
        }
    }
}


const firstName = document.querySelector('#fname');
const lastName = document.getElementById('lname');
const userName = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email');
const message = document.getElementById('message');

const formHandler = new FormHandler(firstName, lastName, userName, password, email, message);
document.addEventListener('input', () => {
    formHandler.validateFirstName();
    if(!formHandler.firstNameValidator) {
        firstName.classList.add('invalid');
    }
})

// firstName.addEventListener('input', () => {
//     console.log(firstName.value)
// })

// window.addEventListener('load', () => {
//     document.querySelector('form').style.display = 'none';
// })
