//create an array with five different todos
//You have X todos
//print the first and second last

const todos =  ['Go to the Gymn','Buy something for breakfast','Prepare the breakfast', 'Drive to work','Practice some Javascript']

console.log(`you have ${todos.length} TODO items`)
console.log(`The first TODO item is "${todos[0]}" and the second last is "${todos[todos.length - 2]}"`)

todos.forEach(function (kalo, index) {
    const num = index + 1
    console.log(`${num} - ${kalo}`)
})

// for (let count = 0; count < todos.length; count++){
//     const num = count + 1
//     const todo = todos[count]
//     console.log(`${num}-${todo}`)
// }