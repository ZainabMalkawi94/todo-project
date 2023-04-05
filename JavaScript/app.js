"use strict"
// let userName = prompt("What is your name?");
// let gender = prompt("Please enter your gender:","male or female");

// if (gender != "male" && gender != "female") {
//     gender = prompt("Please enter your gender:", "male or female");
// }

// let nickName = "";
// if (gender == "male") {
//     nickName = "Mr";
// }
// else if (gender == "female") {
//     nickName = "Ms";
// }


// let age = parseInt(prompt("Please enter your age", "Your age"));
// if (age <= 0) {
//     alert("Please enter your correct age");
//     age = parseInt(prompt("Please enter your age", "Your age"));
// }


// let showWelcoming = confirm("Do you want to show your welcome message?");
// console.log(showWelcoming)
// if (showWelcoming === true) {
// alert ("Hello " + nickName +" "+userName +"\nWelcome to my To-Do List!");
// }

const yesOrNoQuestions = (qustion) => {
    let answer = prompt (qustion);
    return answer;
}
let arrayOfAnswers = [];
const pushTheAnswers = (answer) => {
    arrayOfAnswers.push(answer);

}

let userAnswer = "";
userAnswer = yesOrNoQuestions("Do you have a job?");
pushTheAnswers (userAnswer);
userAnswer = yesOrNoQuestions("Do you manage pressure well?");
pushTheAnswers (userAnswer);
userAnswer = yesOrNoQuestions("Do you manage conflict well?");
pushTheAnswers (userAnswer);
console.log(arrayOfAnswers);

const validationOfAnswers = (answers) => {
    let validationArray = [];
    for (let i = 0; i < answers.length ; i++){
        if (answers[i] =="yes"){
            validationArray.push("Yes");
        }
        else if (answers[i] =="no"){
            validationArray.push("No");
        }
        else{
            validationArray.push("invalid");
        }
        
    }

    return validationArray;

}

console.log (validationOfAnswers(arrayOfAnswers));




