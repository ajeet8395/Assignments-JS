// const { title } = require("process");

// const arr = [1,2,3,4];

// function doubleVaues(arr) {
//   for (let i = 0; i < arr.length; i++){
//     arr[i] = arr[i] * 2;
//   }
//   // console.log(arr);
// }

// (doubleVaues(arr));

//Create an object book with properties title and author. Add a method getDetails to the book object that returns a string with the title and author of the book.

// const book = {
//   title : "Jail Dairy of bhagat singh",
//   author : "Bhagat Singh",
//   getDetails(){
//     return `This "${book.title}" book is written by "${book.author}"`;
//   }
// }

// console.log(book.getDetails());


// Problem: Write a function mergeArrays that takes two arrays as input and returns a new array that contains all the elements from both arrays.
//Example Input: ['a', 'b', 'c'], ['d', 'e', 'f']
//Example Output: ['a', 'b', 'c', 'd', 'e', 'f']

// const arr1 = ['a', 'b', 'c'];
// const arr2 = ['d', 'e', 'f'];

// const mergeArrays = (arr1, arr2) => {
//   let newArray = [];
//   newArray = newArray.concat(arr1, arr2)
//   return newArray;
// }

// console.log(mergeArrays(arr1, arr2));

// Removing a Property
//Problem: Write a function removeProperty that takes an object and a property name as arguments. The function should remove the property from the object if it exists and return the updated object.
// const obj = { name: "Alice", age: 25, city: "New York" };

// const removerProperty = () => {
//   delete obj.city;
//   return obj;
// }

// console.log(removerProperty());


// Problem: Write a function updateProperty that takes an object, a property name, and a new value. The function should update the value of the given property to the new value and return the updated object.

// const property = {
//   name: "Bob", age: 30, city: "San Francisco"
// }

// function updateProperty (){
//   property.name = "Ajeet Singh";
//   return property;
// }
// console.log(updateProperty());


//Problem: Write a function mergeObjects that takes two objects and merges them into a new object. If both objects have the same property, the value from the second object should be used.
// const obj1 = { name: "Charlie", age: 28 };
// const obj2 = { age: 35, city: "Chicago" };

// const mergeObjects = (obj1, obj2) => {
//   let newObj = {};
//   newObj = Object.assign(obj1, obj2);
//   return newObj;
// }

// console.log(mergeObjects(obj1, obj2));


// Write a function countProperties that takes an object and returns the number of properties it has.

// const personDetails = { name: "Diana", age: 22, city: "Miami", isActive: true };

// const countProperties = (personDetails) =>{
//   let count = 0;
//   for(let key in personDetails){
//     count++;
//   }
//   return count;
// }

// console.log(countProperties(personDetails));

// Problem:Write a function filterByAge that takes an array of objects, where each object represents a person with properties name and age. The function should return a new array containing only the people who are 18 years old or older.

// const people = [
//   { name: "Emily", age: 17 },
//   { name: "Frank", age: 20 },
//   { name: "Grace", age: 15 },
//   { name: "Henry", age: 22 }
// ];

// const filterByAge = (people) => {
//   return people.filter(person => person.age >= 18);
// }

// console.log(filterByAge(people));


// Problem: Write a function arrayToObject that takes an array of strings and returns an object where the keys are the strings from the array, and the values are the lengths of those strings.

// const fruits = ["apple", "banana", "cherry"];

// const arrayToObject = (fruits) => {
//   let obj = {};
//   for(let i = 0; i < fruits.length; i++){
//     obj[fruits[i]] = fruits[i].length;
//   }
//   return obj;
// }

// console.log(arrayToObject(fruits));


//Write a function isEmptyObject that takes an object as an argument and returns true if the object has no properties, and false otherwise.

// const object1 = {};
// const object2 = { name: "Ivy" };

// function isEmptyObject (obj) {
//   return Object.keys(obj).length === 0;
// }

// console.log(isEmptyObject(object1));
// console.log(isEmptyObject(object2));


// Problem: Write a function addNewPerson that takes an array of objects and a new person object as arguments. The function should add the new person to the array and return the updated array.
// const people = [
//   { name: "Jake", age: 31 },
//   { name: "Lily", age: 29 }
// ];
// const addNewPerson = (people, newPerson) => {
//   people.push(newPerson);
//   return people;
// }

// console.log(addNewPerson(people, { name: "Alice", age: 25 }))


//Finding a Property in an Array of Objects
// Problem: Write a function findPersonByName that takes an array of objects and a string representing a name. The function should return the first object that has the name property matching the given string.
// const people = [
//   { name: "Nina", age: 19 },
//   { name: "Olivia", age: 24 },
//   { name: "Paul", age: 30 }
// ];
// const findPersonByName = (people, name) => {
//   return people.find(person => person.name === name);
// }

// console.log(findPersonByName(people, "Olivia"));


// Write a function sumAges that takes an array of objects, where each object represents a person with properties name and age. The function should return the sum of all the ages.

// const people = [
//     { name: "Quinn", age: 32 },
//     { name: "Ryan", age: 28 },
//     { name: "Sophia", age: 25 }
//   ];
  
//   const sumAges = (people) => {
    
//   }
  // function sumAges(people){
  //   let sum =  0;
  //   for(let i = 0; i < people.length; i++){
  //     console.log(i);
  //   }
  // }
  
  // console.log(sumAges());


  // ***************************************23092024***********************888
  // 1. Write a function to reverse a string.

  // function reverseString(str){
  //   let reverse = str.split("").reverse().join(""); 
  //   return reverse;
  // }

  // let string = "AJEET";
  // console.log(reverseString(string));




//2. Write a function to check if a string is a palindrome.

// const reverseString = (str) => {
//   let reverse = str.split("").reverse().join("");

//   if(reverse == str){
//     console.log(`${str} is a palindrom number`);
//   }else{
//     console.log(`${str} is not a plaindrom number`);
//   }
// }

//   let string = "AJEEJA";
//   console.log(reverseString(string));



// 3. Write a function to find the largest number in an array.
// const array =  [1,2,3,4,5,6];

// const findLargestNumber = (array) => {
//   let largest = array[0];
//   for(let i = 1; i <= array.length; i++){
//     if(array[i] > largest){
//       largest = array[i];
//     }
//   }
//   return largest;
// }

// console.log(findLargestNumber(array));



// 4. Write a function to remove duplicates from an array.
// const arr = [1, 2, 3, 2, 4, 5, 6];

// const removeDuplicate = (arr) => {
//   const result = []; 
//   for (let i = 0; i < arr.length; i++) {
//     if (!result.includes(arr[i])) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }

// console.log(removeDuplicate(arr));  



// 5. Write a function to check if a number is prime.

// function checkNum(a){
//   if(a%2 == 0){
//     console.log("This is prime number");
//   }else {
//     console.log("This is not a prime number");
//   }
// }

// const a = 23;
// console.log(checkNum(a));



// 6. Write a function to find the sum of all numbers in an array.
// const arr = [9,8,7,6,5,4,3];

// function sumArray(arr) {
//   let sum = 0;

//   for(let i = 0; i < arr.length; i++){
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log(sumArray(arr));



// 7. Write a function to find the factorial of a number.
