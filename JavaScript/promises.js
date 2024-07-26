

const simranPromise = new Promise((resolve, reject) => {

    let parentDecision = true
    if(parentDecision){
        resolve("Yayy, ab shaadi ki tayyari karo")
    }else{
        reject("papa ne IAS dhoond lia hai !, sorry ...")
    }
});

simranPromise.then((msg) => {
    console.log("simran message : ", msg)
    console.log("Let 's book the wedding venue")
}).catch((msg) => {
    console.log("simran message : ", msg)
    console.log("Tinder kha ho yaar !")
})


// Promise.all Method
const f1Promise = new Promise((resolve, reject) => {

    setTimeout(() =>{

        if(Math.random() > 0.5){
            resolve("Friend 1 : hey I am in for Goa")
        }else{
            reject("Friend 1 : Sorry mere pet mei dard ho rha hai")
        }
    }, 3000)
})
const f2Promise = new Promise((resolve, reject) => {

    setTimeout(() =>{

        if(Math.random() > 0.5){
            resolve("Friend 2 : hey I am in for Goa")
        }else{
            reject("Friend 2 : Sorry meri billi beemar hai !")
        }
    }, 2000)
})
const f3Promise = new Promise((resolve, reject) => {

    setTimeout(() =>{

        if(Math.random() > 0.5){
            resolve("Friend 3 : hey I am in for Goa")
        }else{
            reject("Friend 3 : Sorry mujhe padhai krni hai !")
        }
    }, 1000)
})

Promise.all([f1Promise, f2Promise, f3Promise]).then((msg) => {
    console.log(msg)
    console.log("Yayy we are going goa !")
}).catch((msg) => {
    console.log(msg)
    console.log("Yaar band karo goa ka plan banana")
})



// Promise.any Method
const g1Promise = new Promise((resolve, reject) => {

    setTimeout(() =>{

        if(Math.random() > 0.5){
            resolve("Gf 1 : Hey I'll come for dinner")
        }else{
            reject("GF 1 : My friends are coming")
        }
    }, 3000)
})
const g2Promise = new Promise((resolve, reject) => {

    setTimeout(() =>{

        if(Math.random() > 0.5){
            resolve("Gf 1 : Hey I'll come for dinner")
        }else{
            reject("GF 1 : My friends are coming")
        }
    }, 2000)
})
const g3Promise = new Promise((resolve, reject) => {

    setTimeout(() =>{

        if(Math.random() > 0.5){
            resolve("Gf 1 : Hey I'll come for dinner")
        }else{
            reject("GF 1 : My friends are coming")
        }
    }, 1000)
})

Promise.any([g1Promise, g2Promise, g3Promise]).then((result) => {
    console.log(result)
    console.log("My valentine day is sorted !")
}).catch((result) => {
    console.log(msg)
    console.log("How to be the part of Bajrangdal")
})


