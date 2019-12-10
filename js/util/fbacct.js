const signupBtn = document.getElementById("signupBtn");
const loginBtn = document.getElementById("loginBtn");
const loginPw = document.getElementById("login-pw");
const loginEmail = document.getElementById("login-email");
let signupEmail = document.getElementById("signup-email");
let signupPw = document.getElementById("signup-pw");
let signupConf = document.getElementById("pw-conf");

// regex to check if email
const isEmail = email => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(regEx)) return true;
    else return false;
};


signupBtn.addEventListener("click", () => {
    const newUser = {
        email: signupEmail.value,
        password: signupPw.value,
        confirmPassword: signupConf.value
    }

    if (isEmail(newUser.email) === true && newUser.password === newUser.confirmPassword) {
        console.log("VALID INFO!")
    } else if (isEmail(newUser.email) === false) {
        console.log("INVALID EMAIL")
    } else if (newUser.password === "" || newUser.confirmPassword === "") {
        console.log("CANNOT BE EMPTY")
    }

})



    // if (confirmSignup(signupEmail, signupPw, signupConf) === true) {
    //     console.log("INFO IS VALID")
    // } else if (confirmSignup(signupEmail, signupPw, signupConf) === false) console.log("INFO IS INVALID")



// console.log(isEmail(`test@email.com`))