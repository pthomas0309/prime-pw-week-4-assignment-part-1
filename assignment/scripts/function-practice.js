console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, for example 'Hello, Jo!'
function helloName(name) {
  let greeting = `Howdy ${name}`;
  return greeting;
}
// Remember to call the function to test
let heyPesto = helloName('Pesto');
let heyBebop = helloName('Bebop');

console.log(heyPesto);
console.log(heyBebop);
// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  console.log('2 Number Addition Calculator');
  let sum = firstNumber + secondNumber;
  return sum;
}
let mathEquation = addNumbers(3, 5);

console.log('Result:', mathEquation);
// 4. Function to multiply three numbers & return the result
function multiplyThree(num0, num1, num2){
let answer = num0 * num1 * num2;
return answer;
}
console.log('The product is:', multiplyThree(55, 102, 4));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } // end positive integer
  else {
  return false;
} //end negative integer
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log('3 is a positive integer so isPositive returns:', isPositive(3));
console.log( 'isPositive - should say false', isPositive(0) );
console.log('0 is neither positive or negative so isPositive returns:', isPositive(0));
console.log( 'isPositive - should say false', isPositive(-3) );
console.log('-3 is a negative integer so isPositive returns:', isPositive(-3));

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast( array ) {
  console.log('Reading last item');
  let lastItem = array[array.length - 1];
  return lastItem;
}
let wingedBugs = ['lady bug', 'fly', 'moth', 'butterfly'];
let ouchieBugs = ['wasp', 'bee', 'mosquito', 'tick'];
console.log(getLast(wingedBugs));
console.log(getLast(ouchieBugs));
console.log(`What am I missing? ${getLast(['keys', 'phone', 'wallet'])}`);
// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find
function find( value, array ){
for(let i=0; i<array.length; i++){
  if (value === array[i]) {
    console.log(`Value found ${array[i]}`);
    return true;
  }
  else if (value !== array[i] && array[i] === getLast(array)){
    console.log('No match');
    return false;
  }
}//end for loop
}
let someNumbers = ['5', '9', '109', '83', '30', '29', '7']
let numberWords = ['five', 'twelve', 'twenty-three', 'ten']
let decimalNumbers = ['1.45', '60.122', '5.0', '12.46']

console.log('Is 7 in this array?', find('7', someNumbers));
console.log('Is five in this array?', find('five', numberWords));
console.log('Is 12.46 in this array?', find('12.46', decimalNumbers));
console.log('Is 24 in this array?', find('24', someNumbers));
console.log('Is 700 in this array?', find('700', numberWords));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {

}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll( ) {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
