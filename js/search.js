let searchBtn = document.getElementById("searchBtn");
let searchBar = document.getElementById("searchBar");

// search bar functionality

let searchResult = [];

function testPassInfo(data) {
  beer = data;
}

testPassInfo();

searchBtn.addEventListener("click", () => {
  for (i = 0; i < beer.length; i++) {
    if (searchBar.value === beer[i].name) {
      console.log(beer[i].name);
      console.log(beer[i].abv);
      console.log(beer[i].description);
      console.log(beer[i].isRetired);
    }
  }
});
