

// const user ={
//     name: "Nagesh",
//     age: 20,
//     city: "ARA"
// }

// //accessing the data
// console.log(user.name)
// console.log(user['name'])

// /**
//  * adding data to the object
//  */

// user.country = "India"
// user["continent"] = "Asia"
// console.log(user)

// /**
//  * deleting object keys and object itself
//  */
// delete user.country
// console.log(user)


let person = {
    name: "Nagesh",
    age: 20,
    address: {
        city: "ARA",
        state: "Bihar",
        country: "India"
    }
}
// for(let key in person){
//     console.log(key)
// }
// console.log(Object.keys(person))
// console.log(Object.values(person))
// //get both keys and values
// console.log(Object.entries(person))

/**
 * cloning an object using assign
 */
const new_person = Object.assign({}, person)
console.log(new_person)

const new_person_1 = Object.assign({}, person, {role: "Developer"})
console.log(new_person_1)

