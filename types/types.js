/* Typing syntax: Types are assigned to variables via : */
var myVariable = 'This is a string';
/* There are 6 builtin types in typescript: number, string, boolean, void, null, and undefined */
var num = 5;
var myName = "Eli";
var isPresent = true;
/* User defined types include: enum, class, interface, array, and tuple */
/* OOP features include classes and interfaces */
var Car = /** @class */ (function () {
    function Car(model, doors, isElectric) {
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
    }
    Car.prototype.displayMake = function () {
        console.log("This car is " + this.model);
    };
    return Car;
}());
var Prius = new Car('Prius', 4, true);
Prius.displayMake(); // 'This car is a Prius'
/* Interface syntax is similiar to class syntax. Inside the {} of the interface is a list of functions
    that must be found in any object that wishes to "follow" the interface. For example, all Vehicles have the property
    of movement, and the ability to start an engine. How a vehicle does this is specific to the vehicle, but they all
    must have these properties to be a vehicle, otherwise they would not be. Classes and interfaces differ in that
    interfaces may not define variables. Interfaces are about actions that are allowed, not about data or implementations
    of those actions. All functions listed in an interface must be public.
*/
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
