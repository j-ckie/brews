const signupPw = document.getElementById("signupPw");
const confPw = document.getElementById("confPw");
const signupEm = document.getElementById("signupEmail");
const signupBtn = document.getElementById("signupBtn");

const isEmail = email => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(regEx)) return true;
    else return false;
};

const isEmpty = string => {
    if (string.trim() === "") return true;
    else return false;
};

const validateSignUpData = data => {
    let errors = {};

    if (isEmpty(data.email)) {
        errors.email = "Must not be empty";
    } else if (!isEmail(data.email)) {
        errors.email = "Must be a valid email address";
    }

    if (isEmpty(data.password)) errors.password = "Must not be empty";
    if (data.password !== data.confirmPassword)
        errors.confirmPassword = "Passwords must match";

    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
    };
};

signupBtn.addEventListener("click", (req, res) => { // req/res PROMISE
    let newUser = {
        email: signupEm.value,
        password: signupPw.value,
        confirmPassword: confPw.value
    }
    let test = validateSignUpData(newUser)
    if (test.valid === true) {
        console.log("true")
        firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    }
    else console.log(test + " false")




})

