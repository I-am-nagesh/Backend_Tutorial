

/**
 * function taking function as an argument
 */

function operation(operatorfn, a, b){
    return operatorfn(a, b)
}
function add (a, b){
    return a + b;
}
let result = operation(add, 5, 6)
console.log(result)


function getGreetMethod(){
    return function(){
        console.log("Hello !")
    }
}
let greetFn = getGreetMethod()
console.log(typeof greetFn)
greetFn()

