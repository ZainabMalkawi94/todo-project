"use strict"
let userName = prompt("What is your name?");
let gender = prompt("Please enter your gender:","male or female");

if (gender != "male" && gender != "female") {
    gender = prompt("Please enter your gender:", "male or female");
}

let nickName = "";
if (gender == "male") {
    nickName = "Mr";
}
else if (gender == "female") {
    nickName = "Ms";
}


let age = parseInt(prompt("Please enter your age", "Your age"));
if (age <= 0) {
    alert("Please enter your correct age");
    age = parseInt(prompt("Please enter your age", "Your age"));
}


let showWelcoming = confirm("Do you want to show your welcome message?");
console.log(showWelcoming)
if (showWelcoming === true) {
alert ("Hello " + nickName +" "+userName +"\nWelcome to my To-Do List!");
}






