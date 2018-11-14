/* Generic classes are good for designing objects that only work with a single type only */

class GenericClass<T> {
	initialValue: T
	add: (x: T, y: T) => T
 }

 let myGenericNumber = new GenericClass<number>()
 myGenericNumber.initialValue = 0
 myGenericNumber.add = (x, y) => {return x + y}

 let myGenericString = new GenericClass<string>()
 myGenericString.initialValue = "Hello"
 myGenericString.add = (initial, append) => {return initial + append}
 console.log(myGenericString.add(myGenericString.initialValue, " World"))