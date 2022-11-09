// ternary operator...
let isBirthday = true;
const name = 'Luis';

const greeting = isBirthday // in ternary operator you must not put ";" at the end of the condition
? console.log(`Happy Birthday, ${name}!`) // "?" is for run a condition
: console.log(`Good morning, ${name}!`); // ":" is like an else statement

// switch statements...
const weathers = ['sunny', 'rainy', 'snowing', 'overcast'];
const weather = weathers[3];

switch (weather){ // the switch statement needs an expression param.
  case 'sunny': // if you want to make statements in case you must visit 'https://stackoverflow.com/questions/6665997/switch-statement-for-greater-than-less-than'.
  console.log('\nThe time is sunny, go grab an ice cream!'); // after the 'case' you can run the code you want to do if the 'case' statement is true.
  break;
  case 'rainy':
  console.log('\nWe reccommend you not to go out until stop raining!');
  break;

  case 'snowing':
  console.log("\nIt's snowing, go make a snowman!");
  break;

  case 'overcast':
  console.log('\nIf you go out use sunprotection because the UV rays are so strong!');
  break;
  case undefined:
  console.log("ERROR: value entered doesn't exists...")
} // also switch statement have a 'default' method that it's functionallity is almost the same than case, check it out!
