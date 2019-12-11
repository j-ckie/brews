let randomBtn = document.getElementById("randomBtn")
let beerInfo = document.getElementById("beer-info") // remove


// let defaultImg = "SOMEIMGURL"

randomBtn.addEventListener("click", () => {
    async function getRandomBeers() {
        let response = await fetch(fakesandboxURL)
        let beers = await response.json()

        let randomBeers = beers[Math.floor(Math.random() * beers.length)];
        console.log(randomBeers)
        console.log(randomBeers.name)




        if (randomBeers.hasOwnProperty("labels")) {
            console.log("this has a label")
            beerName.innerHTML = `${randomBeers.name}`
            label.src = randomBeers.labels.medium
            abv.innerHTML = randomBeers.abv
            beerstyle.innerHTML = randomBeers.style.shortName


        } else if (randomBeers.labels === undefined) {
            console.log("no image yet")
            label.src = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.frenchtoastsunday.com%2Fwp-content%2Fuploads%2F2015%2F02%2FBeer-icon-1.png&f=1&nofb=1"
            //    labels.src = defaultImg
        } //else {
        //     return  beerInfo = randomBeers.name,
        //             label.src = randomBeers.labels,
        //             beerDesc = randomBeers.description }


        // console.log(randomBeers.name) 
        // console.log(randomBeers.style.shortName)
        // console.log(randomBeers.labels.large)

        showBeerResults();
    }
    getRandomBeers()
});
