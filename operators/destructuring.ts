/* 
	The simplest form of destructuring is destructuring assignment
*/

let input = [1, 2]

let [first, second] = input

console.log(`${first} ${second}`) //1 2

/* 
	Destructuring can be performed in a function
*/

function f([first, second]: [number, number]) {
	console.log(first)
	console.log(second)
}

f([1, 2]); // 1 2

/*
	You can use the spread operator to fill assign variables dynamically to values in an array
*/

let [x, ...rest] = [1, 2, 3, 4] // x = 1 rest = [2, 3, 4]
let [, a, , b] = [1, 2, 3, 4] // a = 2, b = 4


/*
	You can also destructure objects
*/

let o = {
	d: "foo",
	e: 12,
	f: "bar",
}

let {d, e} = o; // d = o.d, e = o.e

/* 
	Default values let you specify a value in case a property is undefined
*/
	function keepWholeObject(wholeObject: {a: string, b?: number}){
		let { a, b=1001 } = wholeObject
	}