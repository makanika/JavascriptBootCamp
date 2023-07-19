let add = function (a,b,c){
    return a+b*c
}

let result = add(10,12,5)
console.log(result)

//defualt arguments

let getScoreText = function (name = 'Anonymous', score = 0){
    return `Name: ${name} - Score: ${score}`
}

let scortText = getScoreText(undefined, 99)
console.log(scortText)

//challenge area
// total, tipPercent 

let tipCalculator = function(totalBill, tipPercent = .2){
    return totalBill * tipPercent

}

let tip = tipCalculator(100, .3)
console.log(tip)
console.log(`A `)

let name = 'David Emiru Egwell'
console.log(`Given names: ${name}`)