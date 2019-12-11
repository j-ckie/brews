let searchBtn = document.getElementById("searchBtn");
let searchBar = document.getElementById("searchBar");
let name = document.getElementById("name");
let beerstyle = document.getElementById("beerstyle");
let abv = document.getElementById("abv");
let isRetired = document.getElementById("isRetired");
let beerDescription = document.getElementById("beerDesc");
let foodPairings = document.getElementById("foodPairings");
// search bar functionality

let searchResult = [];

function testPassInfo(data) {
  beer = data;
}

testPassInfo();

searchBtn.addEventListener("click", () => {
  for (i = 0; i < beer.length; i++) {
    if (searchBar.value === beer[i].name) {
      name.innerHTML = `Beer Name: ${beer[i].nameDisplay}`;
      beerstyle.innerHTML = `Type of Beer: ${beer[i].style.name} `;
      abv.innerHTML = `Alc %: ${beer[i].abv}%`;
      isRetired.innerHTML = `Is Retired: ${beer[i].isRetired}`;
      beerDescription.innerHTML = `Description ${beer[i].description}`;
      foodPairings.innerHTML = `Food Pairings: ${beer[i].foodPairings}`;
    }
  }
});
