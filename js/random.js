async function getRandomBeers(){
    let response = await fetch(`https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beers/?key=${sandboxKey}`)
    let beers = await response.json()
    let beerData= beers.data
    console.log(beerData)
    
    let randomBeers = beerData[Math.floor(Math.random() * beerData.length)];
    console.log(randomBeers.name)
    console.log(randomBeers.style.shortName)
    
}

getRandomBeers()
