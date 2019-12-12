let parameter;

parameter = "random"

const sandboxURL = `${cors}https://sandbox-api.brewerydb.com/v2/${endpoint}/${parameter}/?key=${sandboxKey}`

console.log(sandboxURL)