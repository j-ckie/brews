let parameter; // random

let endpoint;

const cors = "https://cors-anywhere.herokuapp.com/";

const sandboxKey = "fce22c1d03a43332fde9d3f5fd72101c"; //969c47b896fcbe4c5eb88f0e259f8bb1";

// find random beer
randomBtn.addEventListener("click", () => {
    parameter = "random"
    endpoint = "beer"

    const sandboxURLRandom = `${cors}https://sandbox-api.brewerydb.com/v2/${endpoint}/${parameter}/?key=${sandboxKey}`

    async function randomBeerInfo() {
        let response = await fetch(sandboxURLRandom);
        let beerData = await response.json();
        let beer = beerData.data;
        let beerID = beer.id;
        beerName.innerHTML = beer.name;
        abv.innerHTML = beer.abv;
        beerStyle.innerHTML = beer.style.shortName;
        let sandboxURLBeerID = `${cors}https://sandbox-api.brewerydb.com/v2/${endpoint}/${beerID}/?key=${sandboxKey}`

        if (beer.isRetired != "Y") {
            isRetired.innerHTML = `Beer is still in production!`
        } else {
            isRetired.innerHTML = `Beer is no longer in production.`
        }
        hideSearch();
        showBeerResults();
        console.log(beerID);

        async function findRandomBeerInfo() {
            let response = await fetch(sandboxURLBeerID);
            let beerData = await response.json();
            let beer = beerData.data
            // console.log(beer)
            // console.log("FOOBAR")
            if (beer.hasOwnProperty("labels")) {
                label.src = beer.labels.medium;
            } else if (beer.labels === undefined) {
                label.src = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.frenchtoastsunday.com%2Fwp-content%2Fuploads%2F2015%2F02%2FBeer-icon-1.png&f=1&nofb=1"
            }

            if (beer.hasOwnProperty("description")) {
                beerDesc.innerHTML = beer.description;
            } else if (beer.description === undefined) {
                desc.style.display = "none";
            }

            if (beer.hasOwnProperty("foodPairings")) {
                foodList.innerHTML = beer.foodList;
            } else if (beer.foodPairings === undefined) {
                foodPairings.style.display = "none";
                // console.log("FAIL")
            }
        }
        findRandomBeerInfo()

    }
    randomBeerInfo();
    // beerID

    // async function beerIDInfo() {
    //     let sandboxURLBeerID = `${cors}https://sandbox-api.brewerydb.com/v2/${endpoint}/${beerID}/?key=${sandboxKey}`
    // }


})


// #############################################################

// search for beer
searchBtn.addEventListener("click", () => {
    endpoint = "beers"
    async function findBeerID() {
        let sandboxURL = `${cors}https://sandbox-api.brewerydb.com/v2/${endpoint}/?key=${sandboxKey}`
        let response = await fetch(sandboxURL);
        let beerData = await response.json();
        let beer = beerData.data;
        let beerID = beer.id;
    }
})