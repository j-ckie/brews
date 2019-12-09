async function getBreweries(){
    let response = await fetch(`https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/breweries/?key=${sandboxKey}`)
    let breweries = await response.json()
    let breweryData= breweries.data
    // console.log(breweryData)
    breweryData.forEach(element => {
        // console.log(element.id)
        // console.log(element.name)
    })
  
}
getBreweries()