
/* 
	This declares a new interface with a generic function that returns the type it is passed
*/

interface GenericIdentityFn {
	<T>(arg: T): T;
}

function myidentity<T>(arg: T): T {
	return arg
}

let openIdentity: GenericIdentityFn = myidentity

/* We can also specify that the generic parameter be a parameter for the whole interface */

interface PervasiveGenericIdentity<T> {
	(arg: T): T
}


let typedIdentity: PervasiveGenericIdentity<number>  = myidentity

