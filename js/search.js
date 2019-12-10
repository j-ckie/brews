let searchBtn = document.getElementById("searchBtn");
let searchBar = document.getElementById("searchBar");
let beerName = document.getElementById("beerName");
let beerType = document.getElementById("beerType");
let abvNumber = document.getElementById("abvNumber");
let retireStatus = document.getElementById("retireStatus");
let beerDesc = document.getElementById("beerDesc");

// search bar functionality

let searchResult = [];

function testPassInfo(data) {
  beer = data;
}

testPassInfo();

searchBtn.addEventListener("click", () => {
  for (i = 0; i < beer.length; i++) {
    if (searchBar.value === beer[i].name) {
      beerName.innerHTML = `Beer Name: ${beer[i].nameDisplay}`;
      beerType.innerHTML = `Type of Beer: ${beer[i].style.name} `;
      abvNumber.innerHTML = `Alc %: ${beer[i].abv}%`;
      retireStatus.innerHTML = `Is Retired: ${beer[i].isRetired}`;
      beerDesc.innerHTML = `Description ${beer[i].description}`;
    }
  }
});
