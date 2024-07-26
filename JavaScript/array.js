

// arr = [1, 2, 3]

// console.log(typeof arr)

// arr1 = new Array()

// console.log(typeof arr1)

// console.log(arr1)

// arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr[0])
// console.log(arr[7])
// console.log(arr[21])
// console.log(arr[-1])


/**
 * arrays are mutable it can be modify
 */
// arr[1] = 200
// console.log(arr)


// /**
//  * insert items in the array
//  */
// arr = [5,6,7,8,9,10]
// console.log(arr)

// arr.push(11, 12, 13)
// console.log(arr)


// /**
//  * unshift method
//  */
// arr.unshift(2, 3, 4)
// console.log(arr)


// /**
//  * removing method
//  */

// //pop method -->delete from back side
// console.log(arr)
// console.log(arr.pop())
// console.log(arr)

// //shift method -->delete from front side
// console.log(arr)
// console.log(arr.shift())
// console.log(arr)


// /**
//  * concat
//  */
// let a1 = [1,2,3]
// let a2 = [4,5]

// let r = a1.concat(a2)
// console.log(r)

// //size of array
// console.log(a1.length)


// /**
//  * convert array into strings
//  */
// chr_arr = ['N', 'a', 'g', 'e', 's', 'h', ' ', 'P', 'a', 'n', 'd', 'e', 'y']

// //join
// console.log(chr_arr.join())
// console.log(chr_arr.join(""))

// /**
//  * slicing of the array
//  */
// let nums = [1,2,3,4,5,6,7,8,9,0]

// console.log(nums.slice(2))
// console.log(nums.slice(2, 7))
// console.log(nums.slice(5, -1))
// console.log(nums.slice(-9, -7))
// console.log(nums.slice(2, -1))


/**
 * splicing , which modifies the given array
 */
let numbers = [1,2,3,4,5]
let removed = numbers.splice(2,5)
console.log(removed)
console.log(numbers)

