/*
    Generic types allow us to work over a variety of types rather than a single type. In creating the identity function we pass
    back whatever passed in.
*/
/* Only may recieve and return number args */
function __identity(arg) {
    return arg;
}
/* May return any type */
function _identity(arg) {
    return arg;
}
/*
    In order for us to capture the type of argument passed in, we need a type variable which works on types, not values.
    <T> captures the type of the input, allowing us to traffic that type of argument through the function.
*/
function identity(arg) {
    return arg;
}
/* There are a two ways to call this function now */
/* Explicitly stating the type */
var output = identity("Hello World");
/* Allowing the type to be inferred */
output = identity("Hello World");
/*
    Even though the type is specified methods available to the argument are not always present. Considering the .length method,
    we would receive an error if we tried calling this on an arg that wasnt an array. We can mitigate this by declaring <T>, specifying
    that the argument is an array of this type, and indicating the return value as follows
*/
function logginIdentity(arg) {
    console.log(arg.length);
    return arg;
}
/* OR */
function logIdentity(arg) {
    console.log(arg.length);
    return arg;
}
var myIdentity = identity;
var anIdentity = identity;
console.log(myIdentity(1)); // Returns 1 or whatever arg is passed to it just like the function
console.log(anIdentity(1));
