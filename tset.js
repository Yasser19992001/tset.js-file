// day 1
let markMass1 = 78;
let markHeight1 = 1.69;
let johnMass1 = 92;
let johnHeight1 = 1.95;

let markBMI1 = markMass1 / (markHeight1 * markHeight1);
let johnBMI1 = johnMass1 / (johnHeight1 * johnHeight1);
let markHigherBMI1 = markBMI1 > johnBMI1;

console.log("Test Data 1:");
console.log("Mark's BMI:", markBMI1.toFixed(2));
console.log("John's BMI:", johnBMI1.toFixed(2));
console.log("Is Mark's BMI higher than John's?", markHigherBMI1);
console.log("-----------------------------------");

// day 2
let markMass2 = 95;
let markHeight2 = 1.88;
let johnMass2 = 85;
let johnHeight2 = 1.76;

let markBMI2 = markMass2 / (markHeight2 * markHeight2);
let johnBMI2 = johnMass2 / (johnHeight2 * johnHeight2);
let markHigherBMI2 = markBMI2 > johnBMI2;

console.log("Test Data 2:");
console.log("Mark's BMI:", markBMI2.toFixed(2));
console.log("John's BMI:", johnBMI2.toFixed(2));
console.log("Is Mark's BMI higher than John's?", markHigherBMI2);
