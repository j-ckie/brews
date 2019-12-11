let randomBtn =  document.getElementById("randomBtn")
let label = document.getElementById("label")
let beerInfo = document.getElementById("beer-info")


// let defaultImg = "SOMEIMGURL"

randomBtn.addEventListener("click",()=>{
    async function getRandomBeers(){
        let response = await fetch(fakesandboxURL)
        let beers = await response.json()

        let randomBeers = beers[Math.floor(Math.random() * beers.length)];
        console.log(randomBeers)
        console.log(randomBeers.name)

        let beerName = document.getElementById("name")
        let beerStyle = document.getElementById("beerstyle")
        let abv = document.getElementById("abv")
        let isRetired = document.getElementById("isRetired")
        let label = document.getElementById("label")
        let beerDesc = document.getElementById("beer-desc")


        if (randomBeers.hasOwnProperty("labels")) {
            console.log("this has a label")
            beerName.innerHTML = randomBeers.name
            label.src=randomBeers.labels.medium
            abv.innerHTML= randomBeers.abv
            beerstyle.innerHTML = randomBeers.style.shortName
            isRetired.innerHTML = randomBeers.isRetired
            beerDesc.innerHTML = randomBeers.description


        } else if (randomBeers.labels === undefined){
           console.log("no image yet")
           label.src = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.frenchtoastsunday.com%2Fwp-content%2Fuploads%2F2015%2F02%2FBeer-icon-1.png&f=1&nofb=1"
           beerName.innerHTML = randomBeers.name
           abv.innerHTML= randomBeers.abv
           beerstyle.innerHTML = randomBeers.style.shortName
           isRetired.innerHTML = randomBeers.isRetired
           beerDesc.innerHTML = randomBeers.description

        //    labels.src = defaultImg
         } //else {
        //     return  beerInfo = randomBeers.name,
        //             label.src = randomBeers.labels,
        //             beerDesc = randomBeers.description }

        
            // console.log(randomBeers.name) 
            // console.log(randomBeers.style.shortName)
            // console.log(randomBeers.labels.large)
    }
    getRandomBeers() 
});
