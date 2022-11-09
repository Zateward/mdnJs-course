/* Declarating a class */

class Person {
	name;

	constructor(name){
		this.name = name;
	}

	introduceSelf() {
		console.log(`Hi, my name is ${this.name}.`);
	}
}
const Luis = new Person('Luis');


/* Here we gonna extend the 'Person' class by adding Professor class */

class Professor extends Person {
	teaches;

	constructor(name, teaches){
		super(name);
		this.teaches = teaches;
	}

	introduceSelf() {
		console.log(`Hi, my name is ${this.name} and I will be you'r teacher in ${this.teaches}!`);
	}

	grade(paper) {
		const grade = Math.floor(Math.random() * (5 - 1) + 1);
		console.log(grade);
	}
}
const Mike = new Professor('Mike', 'Chimestry');


/* Here we'll see how to implement encapsulation in JS */

class Student extends Person {
	year; // you can declarate "#year" to make a private data property. Private data property must start with "#"

	constructor(name, year) {
		super(name);
		this.year = year;
	}

	introduceSelf() {
		console.log(`Hi everyone, my name is ${this.name} and I'm a student of ${this.year} year.`);
	}

	canStudyShooting() {
		console.log('Can study shooting:', this.year > 1);
	}
}
const Valeria = new Student('Valeria', 1);

// Valeria.introduceSelf(); Valeria.canStudyShooting(); // calling the class created above...


/* Let's create some private methods */

class Private {
	publicMethod() {
		// console.log("I'm a public method!")
		console.log(this.#privateMethod());
	}
	#privateMethod() {
		return `You called me, bitch?`;
	}
}
const example = new Private();
example.publicMethod();