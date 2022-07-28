// Testing if browser is working
// let name = "Freddy";
// alert("This" + " " + name);
// let age = 30;
// alert("Freddy is " + age);

// Defining the variables.
let firstNumber = 3;
let secondNumber = 2.4;
let a = 1;
let b = 2;
let c = 3;
let d = 5;
let e = 6;
let f = 8;

console.log("addition:" + " " + firstNumber + secondNumber);
console.log("divison:" + " " + firstNumber / secondNumber);
console.log("multiplication: " + " " + firstNumber * secondNumber);
console.log("Remainder of:" + " " + (firstNumber % secondNumber));
console.log(
  "First raised to the power of b:" + " " + firstNumber ** secondNumber
);

// Excercise Match the remainder with each of these modulo expressions
console.log("Remainder of" + " " + (3 % 2));
console.log("Remainder of" + " " + (8 % 3));
console.log("Remainder of" + " " + (6 % 3));
console.log("Remainder of" + " " + (1 % 3));

// Enter the expressions (one at a time) into the console and determine what each expression evaluates to.

// let firstSetOfNumbers = [2, 10, 19, 4, 90, 100];
// let secondSetOfNumbers = [-20, -19, -10, -1, 24];
// let thirdSetOfNumbers = [10, 5, 4, 20];
// let fourthSetOfNumbers = [4096, 12];

// console.log(
//   "First Expression: " +
//     firstSetOfNumbers.indexOf(0) +
//     thirdSetOfNumbers.indexOf(1)
// );
// console.log("First Expression: ");
// console.log("First Expression: ");
// console.log("First Expression: ");

// Example to reverse the character of a word

//Define the function to reverse the word
function reverse(word) {
  var reversed = "";
  // loops that itterates through each character of the word
  for (var i = word.length - 1; i >= 0; i--) {
    //Here we the "Reversed" variable to the new value which is : the concatinated reversed variable which includes each index of the word
    reversed = reversed.concat(word[i]);
  }
  return reversed;
}
console.log("The reversed word is: " + " " + reverse("mangoes"));
