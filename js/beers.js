// const aleKey = "1b102352c1e29b24ccf4c4733b29d78f";


// async function getBeers(){
//     let response = await fetch(`https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beers/?key=${aleKey}`)
//     let beers = await response.json()
//     let beerData= beers.data
//     console.log(beerData)
//     beerData.forEach(element => {
//         console.log(element.name)
//     });

// }
// getBeers()

let endpoint = "beers"

let cors = "https://cors-anywhere.herokuapp.com/"

// let sandboxURL = `${cors}https://sandbox-api.brewerydb.com/v2/${endpoint}/?key=${sandboxKey}`
const fakesandboxURL = `${cors}https://sparkly-mailman.glitch.me/beers`

// let prodURL = `${cors}https://api.brewerydb.com/v2/${endpoint}/?key=${prodKey}`

async function getBeer() {
    let response = await fetch(fakesandboxURL)
    let beer = await response.json();

    // console.log(beer)

    beer.forEach(item => {
        console.log({
            name: item.name,
            desc: item.description,
            abv: item.abv,
            retired: item.isRetired
        })
    })

}