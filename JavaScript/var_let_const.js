

/**
 * var  :
 *   1. it is used to define a variable
 *   2. it has function scope but no block scope
 *   3. it is hoisted
 */

// function f1(){
//     var i = 5
//     console.log(i)  
// }
// f1()   //it will bw printed
// console.log(i)   // it will not be printed

// {
//     var i = 5
// }
// console.log(i)   //block scope will be printed



/**
 * let  :
 * 1. no hoisting
 * 2. it also has block scope
 */

// {
//     let name = "nagesh"
// }
// console.log(name)  //it will not be printed


/**\
 * const  :
 *   scope is exactly same as let
 *   const variables are final, can't be re-assigned a value
 */

const country = "India"

country = "USA"    // it will show error



