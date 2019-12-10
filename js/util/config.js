const prodKey = prodAPIKey.key;

// const sandboxKey = sandboxAPIKey;

function shuffleAPI(array) {
    let randomNo = Math.floor(Math.random() * array.length - 1 + 1)
    return array[randomNo];
}

const sandboxKey = shuffleAPI(sandboxAPIKey);

console.log(sandboxKey)

// console.log(sandboxKey);
