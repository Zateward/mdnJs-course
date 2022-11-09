class Shape {
	name;
	sides;
	sideLength;

	constructor(name, sides, sideLength) {
		this.name = name;
		this.sides = sides;
		this.sideLength = sideLength;
	}

	calcPerimeter() {
		this.sides = Number(this.sides);
		this.sideLength = Number(this.sideLength);

		if (isNaN(this.sides)  === true || isNaN(this.sideLength)  === true) {
			console.log('ERROR: You must enter a number in the second and in the third parameter!');
		}
		else {
			console.log(`Perimeter of ${this.name}: ${(this.sides * this.sideLength).toFixed(2)}`);
		}
	}
}

class Square extends Shape {
	sideLength;

	constructor(sideLength) {
		super(sideLength);
		this.name = 'square';
		this.sides = 4;
		this.sideLength = sideLength;
	}

	calcArea(sideLength) {
		console.log(`Area of square: ${(this.sideLength ** 2).toFixed(2)}`);
	}

	calcPerimeter() {
		this.sides = Number(this.sides);
		this.sideLength = Number(this.sideLength);

		if (isNaN(this.sides)  === true || isNaN(this.sideLength)  === true) {
			console.log('ERROR: You must enter a number in the second and in the third parameter!');
		}
		else {
			console.log(`Perimeter of ${this.name}: ${(this.sides * this.sideLength).toFixed(2)}`);
		}
	}
}
const hexagon1 = new Shape('hexagon', 6, 3)
hexagon1.calcPerimeter();

console.log('')

const square1 = new Square(7);
square1.calcArea(); square1.calcPerimeter();