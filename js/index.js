const hideBeerResults = () => {
    document.getElementById("beer-results").style.display = "none";
}

const hideAccount = () => {
    document.getElementById("account").style.display = "none";
    hideLogout()
}

const hideSearch = () => {
    document.getElementById("landing-page").style.display = "none";
}

const showBeerResults = () => {
    document.getElementById("beer-results").style.display = "block";
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

const hideFavBtn = () => {
    document.getElementById("heartLike").style.display = "none"
}

const showFavBtn = () => {
    document.getElementById("heartLike").style.display = "block"
}

const hideAcctInfo = () => {
    document.getElementById("account-info").style.display = "none"
    document.getElementById("favTitle").style.display = "none"
}

const showAcctInfo = () => {
    document.getElementById("favTitle").style.display = "block"
    document.getElementById("account-info").style.display = "block"
}

const refreshPage = () => {
    location.reload();
}

hideBeerResults();
hideAccount();
hideErrorMsg();