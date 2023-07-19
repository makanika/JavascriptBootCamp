let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

console.log(myBook.title)
//using a template string
console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)

//Challenge

//model a person object name, age and location
//generate a string, name is 27 and lives in country

let contact = {
    name: 'David Emiru Egwell',
    age: 46,
    country: 'Uganda'
}

console.log(`${contact.name} is ${contact.age} and lives in ${contact.country}`)

contact.age = contact.age + 1

console.log(`${contact.name} is ${contact.age} and lives in ${contact.country}`)
