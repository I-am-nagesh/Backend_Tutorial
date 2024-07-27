
/**
 * Read from an extrnal file
 */

const fs = require('fs')
// console.log(typeof fs)

// /**
//  * Read in the sync way
//  */
// console.log("Before starting to read")

// const content = fs.readFileSync("input.txt")
// console.log("Output content is : "+ content)

// console.log("Last line")


// /**
//  * read in the async way
//  */
// console.log("Before starting to read")

// fs.readFile('input.txt',(err, content) => {

//     if(err){
//         return console.log(err)
//     }
//     console.log("content of the file is :" + content)
// })
// console.log("Last line")



/**
 * Write the code to write to an external file
 */

console.log("Before")
// fs.writeFileSync('output.txt', 'Hello !')

fs.writeFile('output2.txt', "Hello agin !", err =>{
    if(err){
        return console.log(err)
    }
    console.log('written successfully !')
})

console.log("After")

