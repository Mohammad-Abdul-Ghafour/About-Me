'use strict'
// alert("Welcome to About Me web site")
let userName = prompt("Could I know your name please?")
// console.log(userName);
// alert("Hello " +userName+ " I hope you enjoy our web site")
// alert("Before we get into the web site, you and I will play small guessing game about me")
// alert("I will ask you five questions, and you have to answer yes or no OK?")

let myBackground = prompt("Do you think I have web development background before to make this web site?")
// function questionFunc(){

// }

// function yesNoloop(){
//     while(myBackground != "yes" && myBackground != "y" && myBackground != "no" && myBackground != "n"){
//         alert("Come on "+userName+" it's a game try to guess by yes or no")
        
//     } 
// }
let b;
function questionFunc(myBackground){
    myBackground = prompt("Do you think I have web development background before to make this web site?")
    // b = prompt("Do you think I have web development background before to make this web site?")
    // let c = prompt("Do you think I'm above 25 years old?")
    return myBackground;
} 

function yesNoloop(a){
    while(a != "yes" && a != "y" && a != "no" && a != "n"){
        alert("Come on "+userName+" it's a game try to guess by yes or no")
        questionFunc(a);
        
        console.log(b);
        console.log(myBackground);
    } 
    return a;
    console.log(b);
console.log(myBackground);
}

yesNoloop(myBackground);
console.log(b);
console.log(myBackground);
// while(myBackground != "yes" && myBackground != "y" && myBackground != "no" && myBackground != "n"){
//     alert("Come on "+userName+" it's a game try to guess by yes or no")
//     myBackground = prompt("Do you think I have web development background before to make this web site?")
// }
myBackground = myBackground.toLowerCase();

console.log(myBackground);
if(myBackground == "yes" || myBackground == "y"){
    alert("Ooops, nop I didn't have")
}
else if(myBackground == "no" || myBackground == "n"){
    alert("You got me "+userName+" I didn't have")
}

let myAge = prompt("Do you think I'm above 25 years old?")

