let searchBtn = document.getElementById("searchBtn");
let searchBar = document.getElementById("searchBar");

// search bar functionality

let searchResult = [];

// function testPassInfo(data) {
//   beer = data;
// }

// testPassInfo();

searchBtn.addEventListener("click", () => {
  console.log(beer);
  console.log(searchBar.value);

  for (i = 0; i < beer.length; i++) {
    console.log("for loop executed");
    if (searchBar.value === beer[i][name]) {
      console.log(beer[abv]);
      console.log(beer[desc]);
    } else {
      console.log("Please select another beer");
    }
  }
});
