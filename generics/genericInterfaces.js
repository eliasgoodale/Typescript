/*
    This declares a new interface with a generic function that returns the type it is passed
*/
function myidentity(arg) {
    return arg;
}
var openIdentity = myidentity;
var typedIdentity = myidentity;
