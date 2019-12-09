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
