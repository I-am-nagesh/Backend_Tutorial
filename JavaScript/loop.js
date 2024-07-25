
//for loop

for(var i = 0; i < 10; i++){
    console.log("Hello !")
}


//while loop

let i = 0
while(i < 10){
    console.log("Hello !")
    i++;
}

//continue
for(var i = 1; i <= 50; i++){
    if(i % 2 != 0){
        continue;
    }
    console.log(i)
}

//break
for(var i = 0; i <= 10; i++){
    if(i == 5){
        break;
    }
    console.log(i);
}