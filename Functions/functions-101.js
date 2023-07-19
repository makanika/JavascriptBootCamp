//function -input(argument), code, output(returnvalue)

let greetUser = function () {
    console.log('Welcome User')
}

greetUser()

let square = function (num) {
    let result = num * num
    return result
}
let value = square(3)
console.log(value)

let tempconversion = function(temp) {
    let converted = (temp - 32 ) * 5/9
    return converted
}

let convertedTemp = tempconversion(32)
let otherTempConv = tempconversion(68)

console.log(convertedTemp)
console.log(otherTempConv)