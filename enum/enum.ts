/* Numeric enum: values are automatically assigned down the list 1,2,3,4  */

enum Direction {
	Up = 1,
	Down,
	Left,
	Right,
}

//Direction.Up = 1 .Down = 2 ..etc

enum myResponse {
	No = 0,
	Yes = 1,
}

function respond(recipient: string, message: myResponse): void {
	//..
}

respond("Mister Rodgers", myResponse.Yes) // The enum is automatically extracted in the function

/* When declaring an enum without an initializer it needs to be first or come after all initialized values*/

/*
WRONG
enum E {
	A = getSomeValue(),
	B, 
}
*/

function ret3(): number {
	return 3
}

/* RIGHT */
enum E {
	A,
	B,
	C,
	D = ret3()
}

enum E2 {
	A = ret3(),
	B = 2,
	C = 1,
	D = 0
}

/* Enums can be used as types as well certain members of an interface can be assigned an enum type */

enum ShapeKind {
	Circle,
	Square,
}

interface Circle {
	kind: ShapeKind.Circle
	radius: number
}

interface Square {
	kind: ShapeKind.Square
	sideLength: number
}

let c: Circle = {
	kind: ShapeKind.Circle, // .Square throws error
	radius: 100
}

