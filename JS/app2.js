'use strict'
let score = 0;
alert("Welcome to About Me web site")
let userName = prompt("Could I know your name please?")
alert("Hello " +userName+ " I hope you enjoy our web site")
alert("Before we get into the web site, you and I will play small guessing game about me")
alert("I will ask you five questions, and you have to answer yes or no OK?")


function yesNoloop(a){
    if (a != null){
        a = a.toLowerCase();
    while(a != "yes" && a != "y" && a != "no" && a != "n"){
        alert("Come on "+userName+" it's a game try to guess by yes or no")
        a=questionFunc(a);
        // console.log(a);
    } }
    return a;
}

function questionFunc(b){
    if(b == myBackground){
        myBackground = prompt("Do you think I have web development background before to make this web site?")
        b = myBackground

    }else if (b == myAge){
        
        myAge = prompt("Do you think I'm above 25 years old?")
        b = myAge
    }else if (b == myDegree){
        
        myDegree = prompt("Where do you think I hold bachelor degree?")
        b = myDegree
    }else if (b == myNationality){
        
        myNationality = prompt("Do you thing I'm from Jordan?")
        b = myNationality
    }else if (b == myPersonality){
        
        myPersonality = prompt("Do you think I'm cool?")
        b = myPersonality
    }
    b= b.toLowerCase();
    // console.log(b);
    return b;
} 
let myBackground;
function f1(){
 myBackground = prompt("Do you think I have web development background before to make this web site?")
myBackground = yesNoloop(myBackground);
// console.log(myBackground);
if(myBackground == "yes" || myBackground == "y"){
    alert("Ooops, nop I didn't have")
}
else if(myBackground == "no" || myBackground == "n"){
    alert("You got me "+userName+" I didn't have")
    score +=1 
}}
f1();
let mtAge;
function f2(){
myAge = prompt("Do you think I'm above 25 years old?")
myAge= yesNoloop(myAge);
// console.log(myAge);
if(myAge == "yes" || myAge == "y"){
    alert("That's correct "+userName)
    score +=1 
}
else if(myAge == "no" || myAge == "n"){
    alert("Nop, you missed that one")
}}
f2();
let myDegree;
function f3(){
myDegree = prompt("Where do you think I hold bachelor degree?")
myDegree= yesNoloop(myDegree);
// console.log(myDegree);
if(myDegree == "yes" || myDegree == "y"){
    alert("Ooh, yes I hold")
    score +=1 
}
else if(myDegree == "no" || myDegree == "n"){
    alert("sorry, but your didn't guess it")
}}
f3();
let myNationality;
function f4(){
myNationality = prompt("Do you thing I'm from Jordan?")
myNationality =yesNoloop(myNationality);
// console.log(myNationality);
if(myNationality == "yes" || myNationality == "y"){
    alert("nop, I'm Syrian")
}
else if(myNationality == "no" || myNationality == "n"){
    alert("You got me this time I'm Syrian")
    score +=1 
}}
f4();
let myPersonality;
function f5(){
myPersonality = prompt("Do you think I'm cool?")
myPersonality =yesNoloop(myPersonality);
// console.log(myPersonality);
if(myPersonality == "yes" || myPersonality == "y"){
    alert("Thank you for that")
    score +=1 
}
else if(myPersonality == "no" || myPersonality == "n"){
    alert("I hope you change your mind when you check my web site")
}}
f5();
function f6(){
let luckNumber;
for(let i = 1 ; i < 5 ; i++){
    
    luckNumber = parseInt(prompt(userName+" try to guess my luck number between 1 to 10"))
    while(!luckNumber || luckNumber == null || luckNumber>10||luckNumber<1){
        alert("Come on "+userName+" it's a game try to guess")
        luckNumber = parseInt(prompt(userName+" try to guess my luck number between 1 to 10"))
    }
    if (luckNumber === 3){
        alert("Yes that's right")
        score +=1 
        break;
    }
    else if(luckNumber != 3 && i==4){
        alert("Unfortunately you didn't guess it "+userName+" the correct answer is 3")
    }else if(luckNumber>3){
        alert("That's too high")
    }else if(luckNumber<3){
        alert("That's too low")
    }
    console.log(luckNumber);
}}
f6();
function f7(){
let typeMusicary = ["rock","clasic","country"]

let typeOfmusic;
for(let i = 0 ; i < 6 ; i++){
    
    typeOfmusic = prompt(userName+" try to guess my favorate type of music")
    while(!typeOfmusic || typeOfmusic == null || !isNaN(Number(typeOfmusic)) ){
        alert("Come on "+userName+" it's a game try to guess")
        typeOfmusic = prompt(userName+" try to guess my favorate type of music")
    }
    typeOfmusic = typeOfmusic.toLowerCase();
    let j
    for(j = 0; j< typeMusicary.length;j++){
        if (typeOfmusic == typeMusicary[j]){
            alert("Yes that's right")
            score +=1 
            break;
        
    }}
    if (typeOfmusic == typeMusicary[j]){
        break;
    }else if(i==5){
        alert("Sorry, the correct answers is \n rock and \n clasic \n country")
    }
    else{
        alert("Sorry, try again")
    }
    console.log(typeOfmusic);
}}
f7();

alert("Your score ="+score+" out of 7")