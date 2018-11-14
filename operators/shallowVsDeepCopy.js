/*
    A shallow copy is a bitwise copy of the object. A new object is returned that has an exact
    copy of the values in the original object. If any fields of the object are references to other objects,
    just the reference addresses are copied. A deep copy in contrast, copies everything through the object
    and returns a new object with all the values of the object being copied
*/
/*
    Shallow copy example: All the fields in the object are copied by reference, if the original object
    disappears, so does the new object
*/
var employeeDetailsOriginal = {
    name: 'Manjula',
    age: 25,
    profession: 'Software Engineer'
};
var employeeDetailsDuplicate = employeeDetailsOriginal;
employeeDetailsDuplicate.name = 'Name Changed';
console.log(employeeDetailsOriginal.name);
