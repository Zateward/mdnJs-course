// types of numbers: integers and floats...
const myInt = 5;
const myFloat = 5.234;

// common methods in numbers...
const lotsOfDecimal = 5.2938478976582345789436259786873465287163;;
console.log(lotsOfDecimal);
const twoDecimalPlaces = lotsOfDecimal.toFixed(2);
console.log(twoDecimalPlaces);

// passing a string into a number with Number() method...
let strNumber = '53';
console.log(typeof(strNumber));
strNumber = Number(strNumber) + 47;
console.log(strNumber);

// operator precedence is very important while doing math expressions...
const num1 = 54;
const num2 = 4;
console.log(num1 + num2 / 10 + 4);
let result = ((num1 + num2) / (10 + 4));
console.log(result.toFixed(2))

// increment and decrement operators...
let incrementNum = 5;
let decrementNum = 78;
incrementNum++; // the '++' operator allow us to increment 5 to 6, only 1 number more
decrementNum--; // the '--' operator allow us to decrement 78 to 77, only 1 number less
console.log(incrementNum++);
console.log(decrementNum--);

let x = 50;
console.log(x += 50*3);