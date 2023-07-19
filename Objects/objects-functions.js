let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'History Of Uganda',
    author: 'Muzibu Aggrey',
    pageCount: 723
}

//create a function for the books

let getSummary = function (book) {
    return{
        summary: (`${book.title} by ${book.author}`),
        pageCountSummary: (`${book.title} is ${book.pageCount} pages long`)
    }
    
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

//Challenge Area
//Create a function to take farenheit in - return with all 3 values 

let convertFahrenheit = function (fahrenheit) {
    return {
        fahrenheit: fahrenheit,
        kelvin: (fahrenheit + 459.67) * (5/9),
        celsius: (fahrenheit - 32) * 5/9
    }
}

let temps = convertFahrenheit(74)
console.log(temps)