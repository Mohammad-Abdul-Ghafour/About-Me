'use strict'
alert("Welcome to About Me web site")
let userName = prompt("Could I know your name please?")
alert("Hello " +userName+ " I hope you enjoy our web site")
alert("Before we get into the web site, you and I will play small guessing game about me")
alert("I will ask you five questions, and you have to answer yes or no OK?")
let myBackground = prompt("Do you think I have web development background before to make this web site?")

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


myBackground = yesNoloop(myBackground);
// console.log(myBackground);
if(myBackground == "yes" || myBackground == "y"){
    alert("Ooops, nop I didn't have")
}
else if(myBackground == "no" || myBackground == "n"){
    alert("You got me "+userName+" I didn't have")
}

let myAge = prompt("Do you think I'm above 25 years old?")
myAge= yesNoloop(myAge);
// console.log(myAge);
if(myAge == "yes" || myAge == "y"){
    alert("That's correct "+userName)
}
else if(myAge == "no" || myAge == "n"){
    alert("Nop, you missed that one")
}

let myDegree = prompt("Where do you think I hold bachelor degree?")
myDegree= yesNoloop(myDegree);
// console.log(myDegree);
if(myDegree == "yes" || myDegree == "y"){
    alert("Ooh, yes I hold")
}
else if(myDegree == "no" || myDegree == "n"){
    alert("sorry, but your didn't guess it")
}

let myNationality = prompt("Do you thing I'm from Jordan?")
myNationality =yesNoloop(myNationality);
// console.log(myNationality);
if(myNationality == "yes" || myNationality == "y"){
    alert("nop, I'm Syrian")
}
else if(myNationality == "no" || myNationality == "n"){
    alert("You got me this time I'm Syrian")
}

let myPersonality = prompt("Do you think I'm cool?")
myPersonality =yesNoloop(myPersonality);
// console.log(myPersonality);
if(myPersonality == "yes" || myPersonality == "y"){
    alert("Thank you for that")
}
else if(myPersonality == "no" || myPersonality == "n"){
    alert("I hope you change your mind when you check my web site")
}