const prodKey = prodAPIKey.key;

// const sandboxKey = sandboxAPIKey;

function shuffleAPI(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j]
        array[j] = temp;
    }
}

const sandboxKey = shuffleAPI(sandboxAPIKey);

// console.log(sandboxKey);
