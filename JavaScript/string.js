

/**
 * string
 */

let name = "Nagesh"
let city = 'ARA'

console.log(name, city)
console.log(typeof name)


/**
 * accessing character based on index
 */
console.log(name[0])
console.log(name[3])

name[2] = "M"    //no change becoz string is immutable
console.log(name)

//length of string
console.log(name.length)


//string concatenation
let first_name = "Nagesh"
let last_name = " Pandey"

let full_name = first_name.concat(last_name)
console.log(full_name)
console.log(first_name + last_name)


/**
 * convert to uppercase
 */
console.log(full_name.toUpperCase())


/**
 * convert to lowercase
 */
console.log(full_name.toLowerCase())


/**
 * character at any index str[i]
 */
console.log(name.charAt(3))


/**
 * slicing
 */
console.log(full_name)
console.log(full_name.slice(2))
console.log(full_name.slice(2, 5))
console.log(full_name.slice(-5))
console.log(full_name.slice(-5, -1))


/**
 * indexOf
 */
console.log(full_name.indexOf('P'))


/**
 * trim -->space will be eliminated
 */
let word = "  Nagesh"
console.log(word)
console.log(word.trim())


/**
 * split
 */
let word2 = "Nagesh Pandey"
console.log(word2)
console.log(word2.split(" "))   //array of string
console.log(word2.split(""))   //array of character








