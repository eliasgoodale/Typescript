/*
    The simplest form of destructuring is destructuring assignment
*/
var input = [1, 2];
var first = input[0], second = input[1];
console.log(first + " " + second); //1 2
/*
    Destructuring can be performed in a function
*/
function f(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
f([1, 2]); // 1 2
/*
    You can use the spread operator to fill assign variables dynamically to values in an array
*/
var _a = [1, 2, 3, 4], x = _a[0], rest = _a.slice(1); // x = 1 rest = [2, 3, 4]
var _b = [1, 2, 3, 4], a = _b[1], b = _b[3]; // a = 2, b = 4
/*
    You can also destructure objects
*/
var o = {
    d: "foo",
    e: 12,
    f: "bar"
};
var d = o.d, e = o.e; // d = o.d, e = o.e
/*
    Default values let you specify a value in case a property is undefined
*/
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
}
