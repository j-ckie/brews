let searchBtn = document.getElementById("searchBtn");
let searchBar = document.getElementById("searchBar");
let beerInfo = document.getElementById("beerInfo");

// search bar functionality

let searchResult = [];

function testPassInfo(data) {
  beer = data;
}

testPassInfo();

searchBtn.addEventListener("click", () => {
  for (i = 0; i < beer.length; i++) {
    if (searchBar.value === beer[i].name) {
      console.log(beer[i].nameDisplay);
      console.log(beer[i].abv);
      console.log(beer[i].style.name);
      console.log(beer[i].description);
      console.log(beer[i].isRetired);
    }
  }
});

// beerInfo.innerHTML = beer[i].nameDisplay;
