/* 
	Intersection types combine multiple types into one. Objects of combined types has all the member methods and fields of
	all the types it is comprised of. The most common intersection type in typescript is a mixin. In this example types T and U are captured, first is assigned a type of T, second U, and a mixin return value T & U is specified for the function
*/

function extend<T, U>(first: T, second: U): T & U { 
	/* result is a new intersection type object */
	let result = <T & U>{} 

	/* This copies all of the properties of first by reference into result */ 
	for (let id in first) {
		(<any>result)[id] = (<any>first[id])
	}

	/* This copies all of the properties of second into result, excluding the ones it already recieved from first */
	for (let id in second) {
		if (!result.hasOwnProperty(id)) {
			(<any>result)[id] = (<any>second)[id]
		}
	}
	return result
}

/* 
	Union types differ from intersection types in that they only allow us access to methods that are members of BOTH types, 
*/

interface Bird {
	fly()
	layEggs()
}

interface Fish {
	swim()
	layEggs()
}

function getOviparousPet(): Fish | Bird {
	let oviparousAnimal: Fish | Bird	
	return oviparousAnimal
}

let pet = getOviparousPet()
//pet.layEggs() // OK
//pet.fly() Error not a member of both Bird and Fish use type assertion to check!

/* To check if our pet object can fly or swim we can use the following */

if((<Fish>pet).swim) {
	(<Fish>pet).swim()
}
else {
	(<Bird>pet).fly()
}




