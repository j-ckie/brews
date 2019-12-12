const hideBeerResults = () => {
    document.getElementById("beer-info").style.display = "none";
}

const hideAccount = () => {
    document.getElementById("account").style.display = "none";
    hideLogout()
}

const hideSearch = () => {
    document.getElementById("landing-page").style.display = "none";
}

const showBeerResults = () => {
    document.getElementById("beer-info").style.display = "block";
    // showHeroImg();
}

const showAccount = () => {
    document.getElementById("account").style.display = "block";
}

const showSearch = () => {
    document.getElementById("landing-page").style.display = "block";
}

const hideLogin = () => {
    document.getElementById("login").style.display = "none";
}

const showLogin = () => {
    document.getElementById("login").style.display = "block";
}

const hideSignup = () => {
    document.getElementById("signup").style.display = "none";
}

const showSignup = () => {
    document.getElementById("signup").style.display = "block";
}

const hideLogout = () => {
    logoutBtn.style.display = "none"
}

const showLogout = () => {
    logoutBtn.style.display = "block"
}

const hideErrorMsg = () => {
    document.getElementById("error-message").style.display = "none"
}

const showErrorMsg = () => {
    document.getElementById("error-message").style.display = "block"
}

hideBeerResults();
hideAccount();
hideErrorMsg();