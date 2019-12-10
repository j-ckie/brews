let randomBtn =  document.getElementById("randomBtn")

randomBtn.addEventListener("click",()=>{
    async function getRandomBeers(){
        let response = await fetch(`https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beers/?key=${sandboxKey}`)
        let beers = await response.json()
        let beerData= beers.data
        // console.log(beerData)
        
        let randomBeers = beerData[Math.floor(Math.random() * beerData.length)];
        if (randomBeers.labels == null){
            console.log("no image")
        }
        console.log(randomBeers.name)
        console.log(randomBeers.style.shortName)
        console.log(randomBeers.labels.large)
    }
    getRandomBeers()    
})


