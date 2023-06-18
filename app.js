const fromEuroToDollar = function(valueInEuro){
    
    let valueInDollar = valueInEuro * 1.2;
    
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 127.9;
    
    return valueInYen;
}
const FromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.8;
    
    return valueInPound;
}

const sum = (a,b) => {
    return a + b
}

console.log(sum(7,3))

let oneEuroIs = {
    "JPY": 127.9, 
    "USD": 1.2, 
    "GBP": 0.8, 
}
module.exports = { sum, fromEuroToDollar, fromDollarToYen, FromYenToPound}
