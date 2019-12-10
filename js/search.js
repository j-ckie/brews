let endpoint = "beers";
let cors = "https://cors-anywhere.herokuapp.com/";
let sandboxURL = `${cors}https://sandbox-api.brewerydb.com/v2/${endpoint}/?key=${sandboxKey}`;
// let prodURL = `${cors}https://api.brewerydb.com/v2/${endpoint}/?key=${prodKey}`
async function getBeer() {
  let response = await fetch(sandboxURL);
  let beer = await response.json();
  let beerData = beer.data;
  beerData.forEach(item => {
    console.log({
      name: item.name,
      desc: item.description,
      abv: item.abv,
      retired: item.isRetired
    });
  });
  // console.log(beerData)
}
getBeer();

let searchBtn = document.getElementById("searchBtn");
let searchBar = document.getElementById("searchBar");

// search bar functionality

let searchResult = [];

searchBtn.addEventListener("click", () => {
  for (i = 0; i < beerData.length; i++) {
    if (searchBar.value === beerData[name]) {
      console.log(beerData[abv]);
      console.log(beerData[desc]);
    } else {
      console.log("Please select another beer");
    }
  }
});
