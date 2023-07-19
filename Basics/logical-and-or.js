let temp = 165

if (temp >= 60 && temp <= 90){
    console.log('It is pretty nice outside')
}

if (temp <=0 || temp >= 120){
    console.log('Do not go outside')
}

//Challenge

let isGuestOneVegan = false
let isGuestTwoVegan = false

// Are both guests vegan offer up vegan dishes
if(isGuestOneVegan===true && isGuestTwoVegan ===true){
    console.log('Serve Up both Vegan dishes')
}else if(isGuestOneVegan===true && isGuestTwoVegan===false){
    console.log('Serve up atleast one vegan dish')// Atleast one vegan Make sure to offer atleast one option
}else{
// Offer up anything
    console.log('Serve anything none of them are vegan')
}

