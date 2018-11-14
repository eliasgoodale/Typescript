/*
    Omit is equal to Pick of all of the keys

    type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
*/
var TodoActions;
(function (TodoActions) {
    var Type;
    (function (Type) {
        Type["ADD_TODO"] = "ADD_TODO";
        Type["EDIT_TODO"] = "EDIT_TODO";
        Type["DELETE_TODO"] = "DELETE_TODO";
        Type["COMPLETE_TODO"] = "COMPLETE_TODO";
        Type["COMPLETE_ALL"] = "COMPLETE_ALL";
        Type["CLEAR_COMPLETED"] = "CLEAR_COMPLETED";
    })(Type = TodoActions.Type || (TodoActions.Type = {}));
    TodoActions.num = 1;
    TodoActions.str = "";
})(TodoActions || (TodoActions = {}));
var myTodoActions = { num: 1, str: "hshe" };
/*
    With the Omit type you are able to create a new type without some of the original keys.
    The keys passed in must be in Task to use it, using a key that is not within task
    will result in an error.
*/
var myObj = {
    id: "1234",
    name: "billy",
    contacts: []
};
var wrongObj = {
    id: "1234",
    name: "billy"
};
var retTask = function () { return myObj; };
var newObj = retTask();
console.log(newObj);
var myTask1 = {
    id: "184302",
    name: "hello"
};
var myTask2 = {
    id: "101010",
    contacts: []
};
