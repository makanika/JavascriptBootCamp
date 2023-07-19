let isAccountLocked = false
let userRole = 'admin'

if (isAccountLocked){
    console.log('Account is Locked')
} else {
    console.log('check that your password is correct')
}

if(isAccountLocked){
    console.log('Is Account locked')
} else if (userRole === 'admin'){
    console.log('Welcome Admin')
}else {
    console.log('Welcome')
}