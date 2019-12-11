const hideBeerResults = () => {
    document.getElementById("beer-info").style.display = "none";
}

const hideAccount = () => {
    document.getElementById("account").style.display = "none";
}

const hideSearch = () => {
    document.getElementById("landing-page").style.display = "none";
}

const showBeerResults = () => {
    document.getElementById("beer-info").style.display = "block"
}

const showAccount = () => {
    document.getElementById("account").style.display = "block";
}

const showSearch = () => {
    document.getElementById("landing-page").style.display = "block";
}



hideBeerResults();
hideAccount();