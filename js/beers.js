const aleKey = "1b102352c1e29b24ccf4c4733b29d78f";


async function getBeers(){
    let response = await fetch(`https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beers/?key=${aleKey}`)
    let beers = await response.json()
    console.log(beers)
    // let beerId = beers.data
    // console.log(beerId)

}
getBeers()