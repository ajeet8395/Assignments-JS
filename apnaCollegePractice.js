// object  *****************************
// const Profile = {
//     user: "Ajeet Singh",
//     post: 195,
//     followers: 2000,
//     following: 200,
//     description: "Only letters, digits, underscore( _ ) and $ is allowed. (not even space)"
// }

// console.log(Profile);


// question ****** 
// let userInput = prompt('Please enter your number:');
// let number = Number(userInput);
// if(number % 5 === 0){
//     alert(`${number} is a multiple of 5.`);
// } else{
//     alert(`${number} is not a multiple of 5.`);
// }

// //Question 2
// let studentMarks = prompt('Enter your marks here');
// if( studentMarks >= 90 && studentMarks <= 100) {
//     console.log('Your Grade is A');
// } else if( studentMarks >= 70 && studentMarks <= 89) {
//     console.log('Your Grade is B');
// } else if ( studentMarks >= 50 && studentMarks <= 69) {
//     console.log('Your Grade is C');
// } else if( studentMarks >= 30 && studentMarks <= 49) {
//     console.log('Your Grade is F');
// } else {
//     console.log('Your number is not valid');
// }


// Calculate sum  of 1 to n number.
// let sum = 0;
// let n = prompt("Enter Your number till sum will shown");
// for(let  num = 1; num <= n; num++){
//     sum = sum + num;
//     console.log(num);
// }
// console.log(sum);


// Question Print all num 1 to 100
// for(let i = 1; i<= 100; i++){
//     if(i % 2 === 0){
//         console.log("Even number between 1 to 100 is " + i);
//     }
// }


// Question to create a game where your guess the number which are randomly appear in the game.
// let ranNum = Math.floor(Math.random() * (100 - 1));
// console.log(ranNum);
// let userInput = prompt("Enter your guessed number");
// while(userInput != ranNum){
//     userInput = prompt("Enter again !");
// }
// console.log("Congratulation your number is match and number is:" + ranNum);



// Question to add pre and post
// let fullName = prompt('Enter your Full Name');
// console.log(`@${fullName}${fullName.length}`);


// Question find avg of [85,97,44,37,76,60]
// let stundetMark = [85,97,44,37,76,60];
// let sum = 0;
// for(let val of stundetMark){
//     sum += val;
// }
// let avg = sum/stundetMark.length;
// console.log(`Average marks of student is = ${avg}`);



// Question
// let itemsPrice = [250,645,300,900,50];
// for (let i = 0; i < itemsPrice.length; i++){
//     itemsPrice[i] = itemsPrice[i] * 0.9;
// }
// console.log(itemsPrice);



// Question
// let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
// companies.shift();
// console.log(companies);
// companies.splice(1,1,"Ola");
// console.log(companies);
// companies.push("Amazon");
// console.log(companies);



// Question : create a function where print no of vowel
// const countVowels = (para) =>{
//     let count = 0;
//     for(const char of para){
//        if(char === "a" || char === "e" || char === "o" || char === "u" || char === "i"){
//         count++;
//        }       
//     }
//     return count;
// }



// Questoin     
// let num = [1,2,3,4];
// const sqaureNumber = (num) => {
//     console.log(num*num);
// }
// num.forEach(sqaureNumber);


// Question : filter out marks from given array which are above 90
// let marks = [87,97,93,89,99,86];
// let toppers = marks.filter((val) => {
//     return val > 90;
// })
// console.log(toppers);



// Question : 
// let n = prompt("Enter your number");
// let arr = [];
// for(let i = 1; i <= n; i++){
//     arr[i-1] = i;
// }
// console.log(arr);
// let totalSum = arr.reduce((sum, curr) => {
//     return sum * curr;
// })
// console.log(totalSum);


// Question
// let newh2 = document.getElementsByClassName('heading')[0].innerText += ' This is new text';


// Question
// let updatedBox = document.querySelectorAll(".box");
// let idx = 1
// for(div of updatedBox){
//     div.innerText = ` new text here ${idx}`;
//     idx++;
// }


// Question
// let btn = document.createElement("button");
// btn.innerText = "Click Me!";

// btn.style.color = "white";
// btn.style.backgroundColor = "black";
// document.querySelector("body").prepend(btn)


// Question append new class 
// document.getElementsByClassName("para")[0].classList.add('new-class');



// Practice
// let btn = document.getElementsByClassName('click-effect')
// let btnClick = () => {
//     console.log("Successfully button has been clicked")
// }



// Question: function
class user{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }
    viewData = () => {
        console.log(`This is the data of your website`);
    }
}

let obj = new user("Ajeet Singh", "ajeet@gmail.com");
