

// /**
//  * Synatx error
//  */
// console.log("Hello


// /**
//  * Runtime exceptons
//  */

// let x = 5
// console.log(x.toUpperCase())


// /**
//  * logical exceptions
//  */
// let num = 5
// for(i = -3; i < 5; i++){
//     console.log(num/i)  //logical error is dividing by 0
// }


// let obj = undefined
// console.log(obj.name)

/**
 * error handling
 */
try{
    let obj = undefined
    console.log(obj.name)
}catch(err){
    console.log("Exception handler")
}