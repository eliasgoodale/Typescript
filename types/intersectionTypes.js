/*
    Intersection types combine multiple types into one. Objects of combined types has all the member methods and fields of
    all the types it is comprised of. The most common intersection type in typescript is a mixin. In this example types T and U are captured, first is assigned a type of T, second U, and a mixin return value T & U is specified for the function
*/
function extend(first, second) {
    /* result is a new intersection type object */
    var result = {};
    /* This copies all of the properties of first by reference into result */
    for (var id in first) {
        result[id] = first[id];
    }
    /* This copies all of the properties of second into result, excluding the ones it already recieved from first */
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
function getOviparousPet() {
    var oviparousAnimal;
    return oviparousAnimal;
}
var pet = getOviparousPet();
//pet.layEggs() // OK
//pet.fly() Error not a member of both Bird and Fish use type assertion to check!
/* To check if our pet object can fly or swim we can use the following */
if (pet.swim) {
    pet.swim();
}
else {
    pet.fly();
}
