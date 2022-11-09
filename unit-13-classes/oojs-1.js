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
			console.log('ERROR: You must enter a number in the second and in the third parameter!')
		}
		else {
			console.log(`Perimeter of ${this.name}: ${(this.sides * this.sideLength).toFixed(2)}`)
		}
	}
}

const triangle = new Shape('triangle', 3, 3);
triangle.calcPerimeter();

const square = new Shape('square', 4, 5);
square.calcPerimeter();