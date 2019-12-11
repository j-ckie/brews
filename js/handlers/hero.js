function getRandomHero() {
    let heroImgs = [
        "../img/hero/hero1.jpg",
        "../img/hero/hero2.jpg",
        "../img/hero/hero3.jpg",
        "../img/hero/hero4.jpg"
    ];

    let randomNo = Math.floor(Math.random() * heroImgs.length - 1 + 1);
    return heroImgs[randomNo];
}

let hero = getRandomHero();

let randomHero = document.getElementById("beer-landing");

randomHero.src = hero;