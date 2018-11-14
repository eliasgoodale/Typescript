/* Numeric enum: values are automatically assigned down the list 1,2,3,4  */
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
//Direction.Up = 1 .Down = 2 ..etc
var myResponse;
(function (myResponse) {
    myResponse[myResponse["No"] = 0] = "No";
    myResponse[myResponse["Yes"] = 1] = "Yes";
})(myResponse || (myResponse = {}));
function respond(recipient, message) {
    //..
}
respond("Mister Rodgers", myResponse.Yes); // The enum is automatically extracted in the function
/* When declaring an enum without an initializer it needs to be first or come after all initialized values*/
/*
WRONG
enum E {
    A = getSomeValue(),
    B,
}
*/
function ret3() {
    return 3;
}
/* RIGHT */
var E;
(function (E) {
    E[E["A"] = 0] = "A";
    E[E["B"] = 1] = "B";
    E[E["C"] = 2] = "C";
    E[E["D"] = ret3()] = "D";
})(E || (E = {}));
var E2;
(function (E2) {
    E2[E2["A"] = ret3()] = "A";
    E2[E2["B"] = 2] = "B";
    E2[E2["C"] = 1] = "C";
    E2[E2["D"] = 0] = "D";
})(E2 || (E2 = {}));
/* Enums can be used as types as well certain members of an interface can be assigned an enum type */
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
var c = {
    kind: ShapeKind.Circle,
    radius: 100
};
