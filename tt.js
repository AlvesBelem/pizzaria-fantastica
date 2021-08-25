const bcrypt = require('bcrypt')
const jwt = require('jwt')

const hash = bcrypt.hashSync('tartaruga', 10)

console.log(hash)
