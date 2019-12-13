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


let parameter; // random

let endpoint;

navSearch.addEventListener("click", () => {
    showSearch();
    hideAccount()
})
// search bar functionality

let searchResult = [];

searchBtn.addEventListener("click", () => {

    let searchData = searchBar.value

    async function getBeer() {
        let response = await fetch(fakesandboxURL);
        let beer = await response.json();

        beer.forEach(item => {
            // console.log({
            //     name: item.name
            // })
            if (searchData === item.name) {
                beerName.innerHTML = `${item.name}`
                beerStyle.innerHTML = `<b>Type</b> ${item.style.name}`;
                abv.innerHTML = `<b>Abv</b> ${item.abv}%`

                if (item.hasOwnProperty("labels")) {
                    label.src = item.labels.medium
                    // console.log("THIS IS A TEST")
                } else if (item.labels === undefined) {
                    // console.log("FAIL")
                    label.src = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.frenchtoastsunday.com%2Fwp-content%2Fuploads%2F2015%2F02%2FBeer-icon-1.png&f=1&nofb=1"
                }

                if (item.hasOwnProperty("description")) {
                    beerDesc.innerHTML = item.description
                    // console.log("DESC PASS")
                } else if (item.description === undefined) {
                    // console.log("FAIL")

                    desc.style.display = "none";
                }

                if (item.isRetired != "Y") {
                    isRetired.innerHTML = `<b>Status</b> Beer is still in production!`
                } else { isRetired.innerHTML = `<b>Status</b> Beer is no longer available to purchase.` }

                if (item.hasOwnProperty("foodPairings")) {
                    foodList.innerHTML = item.foodPairings
                } else if (item.foodPairings === undefined) {
                    foodPairings.style.display = "none";
                }

                showBeerResults()
                hideSearch()
            }
        })
    }
    getBeer()
    hideBeerResults()
});
