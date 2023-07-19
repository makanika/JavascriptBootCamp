let name = '   David Egwell   '

// Length property

console.log(name.length)

//convert to uppercase

console.log(name.toUpperCase())

//includdes method

let password = 'abcd123@17bpastswordnm'
console.log(password.includes('password'))

//trim method to remove white space

console.log(name.trim())

//is valid password
//length is more than 8 and doesnt contain the word password

let isValidPassword = function (password) {
    if (password.length >= 8 && !password.includes('password')) {
        return (`${password} is a valid Password`)
    } else {
        return (`${password} is not a valid Password`)

    }
}

console.log(isValidPassword('abcdefgh'))
console.log(isValidPassword('asdifpassword'))
console.log((isValidPassword)('asdf'))