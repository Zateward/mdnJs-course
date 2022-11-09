// creating an array...
const animals = ['Dog', 'Cat', 'Elephant', 'Dolphin', 'Bird', 'Monkey'];
console.log(animals);

console.log(animals.length); // see the number of itemns in an array
console.log(animals[2]); // see a element by the index, u can also remplace an element by: animals[N] = 'Wolf'
animals[0] = 'Wolf' // replacing an element in the array (Doy by Wolf)
console.log(animals)

const random = ['tree', 795, [0, 1, 2]];
console.log('\n'+random[2][2]); // finding items on a nester array

animals.push('Camel'); // adding an item to the array at the end, you can add an item to the BEGGINING with: unshift('obj')
console.log(animals);

const cities = ['Manchester', 'Liverpool', 'Edinburgh', 'Carlisle'];
cities.pop(); // removing the las item of the array, can remove the firt with: shift()
console.log(cities)

const cities2 = ['Manchester', 'Liverpool', 'Edinburgh', 'Carlisle'];
const index = cities2.indexOf('Liverpool');
if (index !== -1 ){
	cities2.splice(index, 1); // if you put more than 1, more arguments will be remover from the list.
}
else{
	console.log(`You'r input dosn't exists on the list :(!`)
}
console.log('\n'+cities2)

for (const city of cities2){ // logging one item from the list at a time.
	console.log(city)
}

