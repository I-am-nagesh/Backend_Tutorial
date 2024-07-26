
// async function getMessage(){
//     return 'Hello !'
// }
// getMessage().then(result => console.log(result))


// /**
//  * print hello after a wait
//  */
// function printHelloAfterWait(){

//     console.log('First line')
//     setTimeout(() => {
//         console.log('Hello !')
//     }, 3000)
//     console.log('Last line')
// }
// printHelloAfterWait()


/**
 * using async_await
 */
async function printHelloAfterWait(){

    console.log('First line')

    let data = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hello !")   
        },3000)
    })
    let result = await data    //start waiting for the data promise to be completed
    console.log(result)
    console.log('Last line')
}

printHelloAfterWait()
