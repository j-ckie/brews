let searchBtn = document.getElementById("searchBtn");
let searchBar = document.getElementById("searchBar");
let beerName = document.getElementById("name");
let beerStyle = document.getElementById("beerstyle");
let abv = document.getElementById("abv");
let isRetired = document.getElementById("isRetired");
let beerDesc = document.getElementById("beerDesc");
let foodPairings = document.getElementById("foodPairings");
let foodList = document.getElementById("food-pairing-list")
let label = document.getElementById("label");
let desc = document.getElementById("descInfo")
let navSearch = document.getElementById("navSearch");
let styleDesc = document.getElementById("beerStyleDesc")

let parameter; // random

let endpoint;

navSearch.addEventListener("click", () => {
    showSearch();
    hideAccount()
})
// search bar functionality


searchBtn.addEventListener("click", () => {
    endpoint = "beers"
    let beerInput = searchBar.value;
    // console.log(beerInput)
    let singleSearchValue = beerInput.replace(/ /g, "+");

    // console.log(singleSearchValue);

    async function findSingleBeer() {
        let sandboxURL = `${cors}https://api.brewerydb.com/v2/${endpoint}/?key=${prodKey}&name=${singleSearchValue}`
        let response = await fetch(sandboxURL);
        let beerData = await response.json();
        let beer = beerData.data[0];

        // console.log(beer);

        beerName.innerHTML = beer.name;
        abv.innerHTML = beer.abv;
        beerStyle.innerHTML = beer.style.shortName;
        styleDesc.innerHTML = beer.style.description

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

        showBeerResults()
        hideSearch()
    }
    findSingleBeer()

})
