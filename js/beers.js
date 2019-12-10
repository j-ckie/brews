//let endpoint = "beers";

let cors = "https://cors-anywhere.herokuapp.com/";

// let sandboxURL = `${cors}https://sandbox-api.brewerydb.com/v2/${endpoint}/?key=${sandboxKey}`
const fakesandboxURL = `${cors}https://sparkly-mailman.glitch.me/beers`;

// let prodURL = `${cors}https://api.brewerydb.com/v2/${endpoint}/?key=${prodKey}`

async function getBeer() {
  let response = await fetch(fakesandboxURL);
  let beer = await response.json();

  beer.forEach(item => {
    console.log({
      name: item.name,
      desc: item.description,
      abv: item.abv,
      retired: item.isRetired
    });
  });
}
