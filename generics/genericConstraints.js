/*
    When working with generic functions we were able to specify that the object needed to be an array to come into the function.
    In using the extends keyword, anything passed into the function will throw an error if it does not have a length property
    that is a number. The function parameters are now constrained to that interface.
*/
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
//loggingIdentity(3) Invalid because 3 does not have length property
loggingIdentity({ length: 10, value: 3 });
/*
    We can also declare a type parameter constrained by another type parameter. Using the following syntax we can recieve an object
    and check if that object has a certain property before performing an operation with it.
*/
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a");
//getProperty(x, "m") throws error because m isnt a key of x
/* Factory creation */
// function create<T>(c: { new(): T }): T {
// 	return new c()
// }
