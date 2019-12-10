async function getBeers(){
    let response = await fetch(`https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beers/?key=${sandboxKey}`)
    let beers = await response.json()
    let beerData= beers.data
    // console.log(beerData)
    beerData.forEach(element => {
        // console.log(element.id)
        // console.log(element.name)
        // console.log(element.abv)
        // console.log(element.style.shortName)
    })
  
}
getBeers()
