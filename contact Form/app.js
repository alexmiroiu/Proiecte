class FormHandler {
    firstNameValidator = false;
    lastNameValidator = false;
    userNameValidator = false;
    passwordValidator = false;
    emailValidator = false;


    constructor(fname, lname, username, pw, mail) {
        this.firstName = fname;
        this.lastName = lname;
        this.username = username;
        this.password = pw;
        this.email = mail;
    }

    getRadioValue(radioButtons) {
        for (let i = 0; i < radioButtons.length; i++) {
            if (radioButtons[i].checked) {
                return radioButtons[i].value;
            }
        }
    }

    validateName(event) {
        const regExName = /^[\w'\-,.]*[^_!¡?÷?¿\/\\+=@#$%ˆ&*(){}|~<>;:[\]]*$/i;
        const regExPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        const regExMail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (event.target.name === 'fname') {
            if (regExName.test(this.firstName.value) && this.firstName.value.length > 1 && this.firstName.value.length < 40) {
                this.firstNameValidator = true;
            } else {
                this.firstNameValidator = false;
            }
        }
        if (event.target.name === 'lname') {
            if (regExName.test(this.lastName.value) && this.lastName.value.length > 1 && this.lastName.value.length < 40) {
                this.lastNameValidator = true;
            } else {
                this.lastNameValidator = false;
            }
        }
        if (event.target.name === 'username') {
            if (regExName.test(this.username.value) && this.username.value.length > 3 && this.username.value.length < 25) {
                this.userNameValidator = true;
            } else {
                this.userNameValidator = false;
            }
        }
        if (event.target.name === 'password') {
            if (regExPass.test(this.password.value) && this.password.value.length < 40) {
                this.passwordValidator = true;
            } else {
                this.passwordValidator = false;
            }
        }
        if (event.target.name === "email") {
            if (regExMail.test(this.email.value)) {
                this.emailValidator = true;
            } else {
                this.emailValidator = false;
            }
        }

    }
    isValid() {
        if (this.firstNameValidator === true &&
            this.lastNameValidator === true &&
            this.emailValidator === true &&
            this.userNameValidator === true &&
            this.passwordValidator === true) {
            return true;
        } else {
            return false;
        }
    }

}


const firstName = document.querySelector('#fname');
const lastName = document.getElementById('lname');
const userName = document.getElementById('username');
const password = document.getElementById('password');
const email = document.getElementById('email');
const errorBox = document.querySelector('.error-message');
const form = document.querySelector('form');
const submitBtn = document.querySelector('button');
const outputBox = document.querySelector('.input-values');
const radioBtns = document.getElementsByName('gender');
const genderOutput = document.getElementById('gender-val');
const fnameOutput = document.getElementById('fname-val');
const lnameOutput = document.getElementById('lname-val');
const emailOutput = document.getElementById('email-val');
const usernameOutput = document.getElementById('username-val');
const passwordOutput = document.getElementById('userpass-val');
const loadingSpinner = document.querySelector('.sk-chase');


const errorColor = '#FF6B6B';

const formHandler = new FormHandler(firstName, lastName, userName, password, email);


firstName.addEventListener('input', (e) => {
    formHandler.validateName(e);
    if (!formHandler.firstNameValidator) {
        firstName.style.color = errorColor;

    }
    if (formHandler.firstNameValidator) {
        firstName.style.color = 'var(--text)';
    }
})

lastName.addEventListener('input', (e) => {
    formHandler.validateName(e);
    if (!formHandler.lastNameValidator) {
        lastName.style.color = errorColor;
    }
    if (formHandler.lastNameValidator) {
        lastName.style.color = 'var(--text)';
    }
})

userName.addEventListener('input', (e) => {
    formHandler.validateName(e);
    if (!formHandler.userNameValidator) {
        userName.style.color = errorColor;
    }
    if (formHandler.userNameValidator) {
        userName.style.color = 'var(--text)';
    }
    // formHandler.userNameValidator ? userName.style.color = 'var(--text)' : userName.style.color = errorColor;
})

password.addEventListener('input', (e) => {
    formHandler.validateName(e);
    if (!formHandler.passwordValidator) {
        password.style.color = errorColor;
    }
    if (formHandler.passwordValidator) {
        password.style.color = 'var(--text)';
    }
})

email.addEventListener('input', (e) => {
    formHandler.validateName(e);
    if (!formHandler.emailValidator) {
        email.style.color = errorColor;
    }
    if (formHandler.emailValidator) {
        email.style.color = 'var(--text)';
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const radioValue = formHandler.getRadioValue(radioBtns);
    if (formHandler.isValid()) {
        form.style.display = 'none';
        loadingSpinner.style.display = 'block';
        setTimeout(() => {
            genderOutput.textContent = radioValue;
            fnameOutput.textContent = firstName.value;
            lnameOutput.textContent = lastName.value;
            emailOutput.textContent = email.value;
            usernameOutput.textContent = userName.value;
            passwordOutput.textContent = password.value;
            outputBox.style.display = 'grid';
            loadingSpinner.style.display = 'none';
        }, 2000);

    } else {
        errorBox.textContent = 'There is an error';
    }

})

// firstName.addEventListener('input', () => {
//     console.log(firstName.value)
// })

// window.addEventListener('load', () => {
//     document.querySelector('form').style.display = 'none';
// })