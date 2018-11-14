/* Interface syntax is similiar to class syntax. Inside the {} of the interface is a list of functions
	that must be found in any object that wishes to "follow" the interface. For example, all Vehicles have the property
	of movement, and the ability to start an engine. How a vehicle does this is specific to the vehicle, but they all
	must have these properties to be a vehicle, otherwise they would not be. Classes and interfaces differ in that 
	interfaces may not define variables. Interfaces are about actions that are allowed, not about data or implementations
	of those actions. All functions listed in an interface must be public. 
*/

/* 
	In this simple example the compiler will check that an object passed to this function has a string type property called label
	the compiler only checks this though, any object with a label field of type string will be able to pass the function
*/

function printLabel(labelledObj: {label: string}) {
	console.log(labelledObj.label)
}





/* 
	We can use an interface to describe the requirements of the label property


interface Point {
	x: number,
	y: number
}

let drawPoint = (point: Point) => {
	// ...
}

drawPoint({
	x: 1,
	y: 2
})

	There is a problem with this implementation wherein in OOP the property of cohesion states that things that
	are part of the same object should go together what we need to do is put the standalone function within the class 
	and make that class inherit the properties from the interface.
*/

interface IPoint {
	x: number,
	y: number,
	/* We do not need to pass the x and y parameters into the draw function because they are directly accessable 
	from the class this interface describes */
	draw: () => void 
}

class Point {
	/* 
	To prevent change of coordinate points after it is initialized we use access modifiers: public, private, protected
	
	private values are prefixed with a single underline so that their getters and setters may be named the value itself
	private _x: number Redundant syntax set in constructor
	public y: number
	*/

	constructor(private _x?: number, public y?: number) { // Initialized both values in the constructor
	}
	draw () {
		console.log(`X: ${this._x} Y: ${this.y}`)
	}

	/* Use getter and setter for private values if a value has a getter it is read only if both is is RDWR */
	
	get x() { 
		return this._x; // allows display of private _x value to user
	}
	set x(value) {
		if (value < 0)
			throw new Error('value cannot be less than 0')
		this._x = value;
	}
}

let myPoint = new Point(1, 2); 
myPoint.draw()

/* Using get and set keywords allow access to read and modify private variables */

myPoint.x
myPoint.x = 10;



