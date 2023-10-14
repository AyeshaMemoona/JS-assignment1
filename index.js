// let singleString = 'Hi there!';
// let doubleString = "How are you?";

// let language = "JavaScript";
// let message = `Let's learn ${language}`;
// console.log(language);

// let str3 = "New \line.";
// let str4 = "I'm containing a backslash!";
// console.log(str3);
// console.log(str4);


// exercise2.1
let str1 = 'Laurence';
let str2 = "Svekis";
let val1 = undefined;
let val2 = null;
let myNum = 1000;

console.log("str1",typeof str1);
console.log("str2",typeof str2 );
console.log("val1",typeof val1);
console.log("val2",typeof val2);
console.log("myNum",typeof myNum);

// exercise2.2
// let name="Hi, my name is Ayesha Memoona,"
// let age=" I am 17 year old"
// let c=" and I can code javascript:"
// let strToBool = "true";
// console.log(strToBool);
// let result2 = name+age+c+strToBool;

// console.log(result2);
const name = "Ayesha Memoona";
const age = 17;
const canCode = true;

console.log(`Hi, my name is ${name}, I am ${age} years old, and I can code JavaScript: ${canCode}.`);

// exercise2.3

const a = parseFloat(prompt("Enter the value of 'a':"));
const b = parseFloat(prompt("Enter the value of 'b':"));
if (!isNaN(a) && !isNaN(b)) {
  const aSquared = Math.pow(a, 2);
  const bSquared = Math.pow(b, 2);
  const c = Math.sqrt(aSquared + bSquared);
  console.log(`The hypotenuse (c) is: ${c}`);
} else {
  console.log("Invalid input. Please enter valid numeric values for 'a' and 'b'.");
}


// exercise2.4
let a1 = 10; 
let b1 = 5;  
let c1 = 3; 

// Add 'b' to 'a'
a1 += b1;

// Divide 'a' by 'c'
a1 /= c1;

// Replace the value of 'c' with the modulus of 'c' and 'b'
c1 = c1 % b1;

// Print all three numbers to the console
console.log(`a: ${a1}`);
console.log(`b: ${b1}`);
console.log(`c: ${c1}`);

// chapter project1
const distanceInMiles = 130;
const distanceInKilometers = distanceInMiles * 1.60934;
console.log(`The distance of ${distanceInKilometers.toFixed(4)} kms is equal to ${distanceInMiles} miles.`);

// chapter project2

const heightInInches = 70;  
const weightInPounds = 154; 
const heightInCentimeters = heightInInches * 2.54;
const weightInKilograms = weightInPounds * 0.453592;
const heightInMeters = heightInCentimeters / 100;
const bmi = weightInKilograms / (heightInMeters * heightInMeters);
console.log(`Height: ${heightInInches} inches is equal to ${heightInCentimeters} cm`);
console.log(`Weight: ${weightInPounds} pounds is equal to ${weightInKilograms} kg`);
console.log(`BMI: ${bmi.toFixed(2)}`);





