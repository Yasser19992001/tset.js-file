// ======================================
// 🧠 JavaScript Arrays – Classwork
// ======================================

// 👇 Fill in the blanks (__________) with your expected outputs after running each section.
// Run this code in your browser console or VS Code (Node.js).

// ==============================
// Level 1: Understanding Arrays
// ==============================

// Q1. What is an array in JavaScript?
// An array is ________________________________________________.

// Real-life examples of arrays:
let studentNames = ["Alice", "Bob", "Charlie"];
let prices = [10.99, 15.50, 20.00];
let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

console.log("Q1 Examples of Arrays:");
console.log(studentNames); 
console.log(prices);       
console.log(daysOfWeek);   
console.log("----------------------------------");


// Q2. How do you create an array? (Three ways)
let fruits = ["apple", "banana", "cherry"]; // 1
let numbers = new Array(10, 20, 30);        // 2
let colors = [];                            // 3
colors[0] = "red";
colors[1] = "green";
colors[2] = "blue";

console.log("Q2 Arrays:");
console.log(fruits); 
console.log(numbers); 
console.log(colors);  
console.log("----------------------------------");


// Q3. Mixed data types in an array
let mixedArray = [42, "hello", true];
console.log("Q3 Mixed Array:", mixedArray);
console.log("----------------------------------");


// Q4. Difference between array and single variable
let singleName = "Alice";
let nameList = ["Alice", "Bob", "Charlie"];

console.log("Q4 Example:");
console.log("Single variable:", singleName);
console.log("Array variable:", nameList);   
console.log("----------------------------------");



// Level 2: Accessing and Modifying Arrays


// Q5. Access specific items
let animals = ["cat", "dog", "bird", "fish"];
console.log("Q5 Access Elements:");
console.log("First:", animals[0]);                  
console.log("Last:", animals[animals.length - 1]);  
console.log("----------------------------------");


// Q6. Change a value in an array
animals[1] = "tiger";
console.log("Q6 Modified Array:", animals); 
console.log("----------------------------------");


// Q7. .length property
console.log("Q7 Number of items:", animals.length); 
console.log("----------------------------------");


// Q8. Add new element without using .push()
animals[animals.length] = "lion";
console.log("Q8 Add without push:", animals); 
console.log("----------------------------------");


// ==============================
// Level 3: Working with Loops and Arrays
// ==============================

// Q9. Print all elements using 3 loops
let cities = ["London", "Paris", "Tokyo"];

console.log("Q9 for loop:");
for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]); 
}

console.log("Q9 for...of loop:");
for (let city of cities) {
  console.log(city); 
}

console.log("Q9 while loop:");
let i = 0;
while (i < cities.length) {
  console.log(cities[i]);
  i++;
}
console.log("----------------------------------");


// Q10. Print all numbers multiplied by 2
let nums = [2, 4, 6, 8];
console.log("Q10 Numbers * 2:");
for (let num of nums) {
  console.log(num * 2); 
}
console.log("----------------------------------");


// Q11. Print each name in uppercase
let names = ["alice", "bob", "charlie"];
console.log("Q11 Names in uppercase:");
for (let name of names) {
  console.log(name.toUpperCase());
}
console.log("----------------------------------");


// Q12. Count items without using .length
let fruitsList = ["apple", "banana", "cherry", "orange"];
let count = 0;

for (let fruit of fruitsList) {
  count++;
}

console.log("Q12 Count without .length:", count); 
console.log("----------------------------------");


// Q13. Find largest and smallest number in an array
let numbersList = [12, 5, 27, 8, 19];
let largest = numbersList[0];
let smallest = numbersList[0];

for (let num of numbersList) {
  if (num > largest) largest = num;
  if (num < smallest) smallest = num;
}

console.log("Q13 Largest number:", largest);  
console.log("Q13 Smallest number:", smallest); 
console.log("----------------------------------");
