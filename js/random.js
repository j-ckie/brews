let randomBtn =  document.getElementById("randomBtn")
let label = document.getElementById("label")
let beerInfo = document.getElementById("beer-info")
let beerDesc = document.getElementById("beer-desc")



randomBtn.addEventListener("click",()=>{
    async function getRandomBeers(){
        let response = await fetch(fakesandboxURL)
        let beers = await response.json()

        let randomBeers = beers[Math.floor(Math.random() * beers.length)];
        if (randomBeers.labels == null){
           console.log("no image yet")
        } else {
            return  beerInfo = randomBeers.name,
                    label.src = randomBeers.labels,
                    beerDesc = randomBeers.description 
                            

        }
        
            // console.log(randomBeers.name) 
            // console.log(randomBeers.style.shortName)
            // console.log(randomBeers.labels.large)
    }
    getRandomBeers() 
});
