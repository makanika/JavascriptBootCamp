//Global Scope ConvertFtoC, TempOne tempTwo
 //local scop F C

let convertFarenheitToCelsius = function (farenheit){
    let celsuis = (farenheit - 32) * 5/9
    return celsuis
}

let tempOne = convertFarenheitToCelsius(32)
let tempTwo = convertFarenheitToCelsius(68)

console.log(tempOne)
console.log(tempTwo)