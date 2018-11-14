/* Generic classes are good for designing objects that only work with a single type only */
var GenericClass = /** @class */ (function () {
    function GenericClass() {
    }
    return GenericClass;
}());
var myGenericNumber = new GenericClass();
myGenericNumber.initialValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
var myGenericString = new GenericClass();
myGenericString.initialValue = "Hello";
myGenericString.add = function (initial, append) { return initial + append; };
console.log(myGenericString.add(myGenericString.initialValue, " World"));
