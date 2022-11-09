// you can scape quotes with '/'...
let string = 'I\'d love the cake I ate yesterday!'
console.log(string)

// concatenating strings...
const greeting = 'Hello';
const name = 'Luis';

const sayHello =  `${greeting}, ${name}!!!` 
/* you can also do this in concatenation...
const sayHello = greeting + ' ' + name + '!' */
console.log(sayHello);

// to convert a number into a string you must do this...
const num = 345;
const numToString = num.toString();
console.log(typeof(numToString));

// getting the length of a string...
const word = 'Parangaricutirimicuaro';
console.log(word.length);
console.log(word[21]); // with this you can print the las letter in the word variable

// substrings in strings...
const word2 = 'watermelon';

if (word2.includes('melon')){ // the 'incudes()' parameter takes the substring you want to search for
	console.log('Found "melon"!');
}
else{
	console.log('No "melon" here!');
}



if (word2.includes('wa')){ // the 'startsWith()' takes the starting substring you want to search for
	console.log('Word start\'s with "wa"');
}
else{
	console.log('Nothing start\'s with "wa" here!');
}



if (word2.endsWith('lon')){ // the 'endsWith()' takes the ending substring you want to search for
	console.log('Word end\'s with "lon"!');
}
else{
	console.log('Word dosen\'t end\'s with "lon" here!');
}

// finding a position of a substring...
const paragraph = 'Hello kids, do you like violence???';
console.log(paragraph.indexOf('do')); // if the result is "-1" is because the letter dosen't exists

// extracting substrig for string...
const word3 = 'camaleon';
console.log('\n' + word3.slice(2,5)); // the slice param: (start:stop)

// changing cases in a string...
const word4 = 'PictIOnaRy';

console.log(word4.toLowerCase());
console.log(word4.toUpperCase());
