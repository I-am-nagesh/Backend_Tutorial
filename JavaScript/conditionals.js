

var num = 20

if(num % 2 == 0){
    console.log("Even")
}
else{
    console.log("Odd")
}

//ternary operator ->if-else
num % 2 == 0 ? console.log("Even") : console.log("Odd")

//nested conditions

var a = 10

if(a >= 10){
    if(a > 5){
        console.log('a is greater than 0 and 5')
    }else{
        console.log('a is greater than 0 but less than 5')
    }
}else{
    console.log('a is less than 0')
}

a >= 0 ? a > 5 ?  
console.log('a is greater than 0 and 5') :  
console.log('a is greater than 0 but less than 5') :  
console.log('a is less than 0')

//switch cases

var fruit = "Apple"

switch(fruit){
    case "Apple":
        console.log("It is an apple")
        break
    case "Mango":
        console.log("it is a mango")
        break
    default:
        console.log("Not a valid fruit")        
}

