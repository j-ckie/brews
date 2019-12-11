const hideBeerResults = () => {
    document.getElementById("beer-info").style.display = "none";
}

const hideAccount = () => {
    document.getElementById("account").style.display = "none";
}

const showBeerResults = () => {
    document.getElementById("beer-info").style.display = "block"
}

hideBeerResults();
hideAccount();