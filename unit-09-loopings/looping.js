// for of loop...
const animals = ['Lion', 'Tiger', 'Mamoot', 'Gorilla', 'Monkey', 'Cat', 'Dog', 'Dolphin'];

// for (const animal of animals){ // this is the for of loop, it will prin every animal of the list animals.
// 	console.log(animal);
// }


for (let i = 0; i < animals.length; i++) { // can also use the for loop instead the for of loop, but it's a little different.
	console.log(animals[i]);
}

console.log('');

// map()...
function toUpper(str){ // let's create a function to use later with map() function.
	return str.toUpperCase();
}

const upperAnimals = animals.map(toUpper); // "map.()" call's the function for each item in the array and then run the function for each.
console.log(upperAnimals);

// filter()...
function startsWith_D(str){
	return str.startsWith('D');
}

const dAnimals = animals.filter(startsWith_D);
console.log(dAnimals); console.log('');

// for loop...
function calculate(){ // let's create a function 
	for (let i=1; i<11; i++){ // the structure of the 'for loop' is this one: {initializer; condition; final-expression}.
		const result = `${i} * ${i} = ${i * i}`; // here we want to create a variable to print it later in the same for loop.
		console.log(result);
	}
	console.log('\nFinished!\n'); // return this value when the condition is accomplished.
}

calculate(); // calling the function.

// can use break and continue statements...

for (let gor of animals){
	if (gor === 'Gorilla'){
		break; // in here the array will break when the value of the variable "gor" is "Gorilla", the continue statement is commpnly used to skip values from a loop.
	console.log(lsd);
	}
}

// "while" and "do while" loop...

const names = ['Lugi', 'Jorch', 'Carol', 'Margarette', 'Emma'];
let value = 0;
let result = 'My crew is formed by: '

/* HERE IS HOW THE "WHILE" LOOP WORKS: */

// while (value < names.length){ // after the "while" loop the code will be runned until the condition is accomplished.
// 	if (value === names.length - 1){ // in here the final value, in this case "Emma" is selected.
// 		result += `and ${names[value]}.`;
// 		// console.log(result);
// 	}
// 	else{
// 		result += `${names[value]}, `;
// 		// console.log(result);
// 	}
// 	value++;
// }

// console.log(result)``

/* HERE IS HOW THE "DO WHILE" LOOP WORKS: */

do{
	if (value === names.length - 1){ // in here the final value, in this case "Emma" is selected.
		result += `and ${names[value]}.`;
		//console.log(result);
	}
	else{
		result += `${names[value]}, `;
		//console.log(result);
	}
	value++;
} while(value < names.length);

console.log(result);


// active learning: launch countdown...

/* 
const output = document.querySelector('.output');
output.innerHTML = '';

let i = 10;

while (i >= 0) {
  const para = document.createElement('p');
  if (i === 10) {
    para.textContent = `Countdown ${i}`;
  } else if (i === 0) {
    para.textContent = 'Blast off!';
  } else {
    para.textContent = i;
  }

  output.appendChild(para);

  i--;
}
*/


// active learning: filling in a guest list...

/*
const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// loop starts here
for (let i of people){
  if (i === 'Phil' || i === 'Lola'){
    refused.textContent += `${i}, `;
  }
  else{
    admitted.textContent += `${i}, `;
  }
}

refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';

*/