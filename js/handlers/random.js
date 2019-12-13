let randomBtn = document.getElementById("randomBtn")

const sandboxURL = `${cors}https://sandbox-api.brewerydb.com/v2/${endpoint}/?key=${sandboxKey}`

// // let defaultImg = "SOMEIMGURL"

randomBtn.addEventListener("click", () => {
    parameter = "random"
    endpoint = "beer"

    const sandboxURLRandom = `${cors}https://api.brewerydb.com/v2/${endpoint}/${parameter}/?key=${prodKey}`

    async function randomBeerInfo() {
        let response = await fetch(sandboxURLRandom);
        let beerData = await response.json();
        let beer = beerData.data;
        let beerID = beer.id;
        beerName.innerHTML = beer.name;
        beerName.value = beer.name;
        console.log(beerName.value)
        abv.innerHTML = beer.abv;
        beerStyle.innerHTML = beer.style.shortName;
        styleDesc.innerHTML = beer.style.description

        let sandboxURLBeerID = `${cors}https://api.brewerydb.com/v2/${endpoint}/${beerID}/?key=${prodKey}`

        if (beer.isRetired != "Y") {
            isRetired.innerHTML = `Beer is still in production!`
        } else {
            isRetired.innerHTML = `Beer is no longer in production.`
        }
        // hideSearch();
        // showBeerResults();
        // console.log(beerID);

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
                document.getElementById("descInfo").style.display = "block";
            } else if (beer.description === undefined) {
                document.getElementById("descInfo").style.display = "none";
            }

            if (beer.hasOwnProperty("foodPairings")) {
                foodList.innerHTML = beer.foodList;
                document.getElementById("foodPairings").style.display = "block";
            } else if (beer.foodPairings === undefined) {
                document.getElementById("foodPairings").style.display = "none";
                // console.log("FAIL")
            }
            hideSearch();
            showBeerResults();
        }
        findRandomBeerInfo()

    }
    randomBeerInfo();

})