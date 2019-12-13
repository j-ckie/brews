let randomBtn = document.getElementById("randomBtn")
// let beerInfo = document.getElementById("beer-info") // remove

const endpoint = "beers"
// const cors = "https://cors-anywhere.herokuapp.com/";

// const sandboxKey = "fce22c1d03a43332fde9d3f5fd72101c"; //969c47b896fcbe4c5eb88f0e259f8bb1";

const sandboxURL = `${cors}https://sandbox-api.brewerydb.com/v2/${endpoint}/?key=${sandboxKey}`

// // let defaultImg = "SOMEIMGURL"

randomBtn.addEventListener("click", () => {
    async function getRandomBeers() {
        let response = await fetch(sandboxURL)
        let beersData = await response.json()
        let beers = beersData.data

        // console.log(beers)

        let randomBeers = beers[Math.floor(Math.random() * beers.length)];
        // console.log(randomBeers)
        // console.log(randomBeers.name)
        beerName.innerHTML = `${randomBeers.name}`
        abv.innerHTML = randomBeers.abv
        beerstyle.innerHTML = randomBeers.style.shortName

        if (randomBeers.hasOwnProperty("labels")) {
            // console.log("this has a label")

            label.src = randomBeers.labels.medium

        } else if (randomBeers.labels === undefined) {
            // console.log("no image yet")
            label.src = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.frenchtoastsunday.com%2Fwp-content%2Fuploads%2F2015%2F02%2FBeer-icon-1.png&f=1&nofb=1"
        }

        if (randomBeers.hasOwnProperty("description")) {
            beerDesc.innerHTML = randomBeers.description
            document.getElementById("descInfo").style.display = "block"
        } else if (randomBeers.description === undefined) {
            document.getElementById("descInfo").style.display = "none";
        }

        if (randomBeers.hasOwnProperty("foodPairings")) {
            foodList.innerHTML = randomBeers.foodPairings
        } else if (randomBeers.foodPairings === undefined) {
            foodPairings.style.display = "none"
        }

        if (randomBeers.isRetired != "Y") {
            isRetired.innerHTML = `<b>Status</b> Beer is still in production!`
        } else {
            isRetired.innerHTML = `<b>Status</b> Beer is no longer available to purchase.`
        }
        // if (randomBeers.name === undefined) {
        //     getRandomBeers()
        // }
        showBeerResults();
        hideSearch()
    }
    getRandomBeers()
});