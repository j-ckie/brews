let searchBtn = document.getElementById("searchBtn");
let searchBar = document.getElementById("searchBar");

// search bar functionality

let searchResult = [];

function testPassInfo(data) {
  beerData = data;
}

testPassInfo();

searchBtn.addEventListener("click", () => {
  console.log(beerData);
  console.log(searchBar.value);

  for (i = 0; i < beerData.length; i++) {
    console.log("for loop executed");
    console.log(beerData[i]);
    if (searchBar.value === beerData[i][name]) {
      console.log(beerData[abv]);
      console.log(beerData[desc]);
    } else {
      console.log("Please select another beer");
    }
  }
});
