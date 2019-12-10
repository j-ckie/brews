let randomBtn =  document.getElementById("randomBtn")
let label = document.getElementById("label")

randomBtn.addEventListener("click",()=>{
    async function getRandomBeers(){
        let response = await fetch(`https://cors-anywhere.herokuapp.com/https://sandbox-api.brewerydb.com/v2/beers/?key=${sandboxKey}`)
        let beers = await response.json()
        let beerData= beers.data
        // console.log(beerData)
        
        let randomBeers = beerData[Math.floor(Math.random() * beerData.length)];
        if (randomBeers.labels == null){
           let defaultLabel =  `<img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.syncron.com%2Fwp-content%2Fuploads%2F2017%2F03%2Fimg-placeholder.png&f=1&nofb=1">`
           return defaultLabel
        }else{
            console.log(randomBeers.name) 
            console.log(randomBeers.style.shortName)
            console.log(randomBeers.labels.large)

        }
    }
    // label.innerHTML = randomBeers 
    getRandomBeers()    
})


