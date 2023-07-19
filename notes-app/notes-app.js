const notes = ['Note 1','Note 2','Note 3']

const objects = [{}, {
    title: 'My Next Trip',
    body: 'Pakuba Holiday Trip'
},{
    title: 'Habbits to work on',
    body: 'Doing more exercise'
},{
    title: 'Finish the Javascript Lessons',
    body: 'Increase the practice time to two hours a day'
}]


//DOM - Document Object Model

// //Query and remove
// const p = document.querySelector('p')
// p.remove()

//Query all and remove
const ps = document.querySelectorAll('p')

ps.forEach(function (p){
    p.textContent = '***********'
    //console.log(p.textContent)
})

// Add a mew element

const newParagraph = document.createElement('p')
newParagraph.textContent = 'This is a new element from Javascript'
document.querySelector('body').appendChild(newParagraph)