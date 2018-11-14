/* Interface syntax is similiar to class syntax. Inside the {} of the interface is a list of functions
    that must be found in any object that wishes to "follow" the interface. For example, all Vehicles have the property
    of movement, and the ability to start an engine. How a vehicle does this is specific to the vehicle, but they all
    must have these properties to be a vehicle, otherwise they would not be. Classes and interfaces differ in that
    interfaces may not define variables. Interfaces are about actions that are allowed, not about data or implementations
    of those actions. All functions listed in an interface must be public.
*/
/*
    In this simple example the compiler will check that an object passed to this function has a string type property called label
    the compiler only checks this though, any object with a label field of type string will be able to pass the function
*/
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var Point = /** @class */ (function () {
    /*
    To prevent change of coordinate points after it is initialized we use access modifiers: public, private, protected
    
    private values are prefixed with a single underline so that their getters and setters may be named the value itself
    private _x: number Redundant syntax set in constructor
    public y: number
    */
    function Point(_x, y) {
        this._x = _x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("X: " + this._x + " Y: " + this.y);
    };
    Object.defineProperty(Point.prototype, "x", {
        /* Use getter and setter for private values if a value has a getter it is read only if both is is RDWR */
        get: function () {
            return this._x; // allows display of private _x value to user
        },
        set: function (value) {
            if (value < 0)
                throw new Error('value cannot be less than 0');
            this._x = value;
        },
        enumerable: true,
        configurable: true
    });
    return Point;
}());
var myPoint = new Point(1, 2);
myPoint.draw();
/* Using get and set keywords allow access to read and modify private variables */
myPoint.x;
myPoint.x = 10;
