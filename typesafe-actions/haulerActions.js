"use strict";
exports.__esModule = true;
var LiquidTraceClient_1 = require("../requests/LiquidTraceClient");
var typesafe_actions_1 = require("typesafe-actions");
var config = {
    baseURL: 'https://jsonplaceholder.typicode.com'
};
var httpClient = new LiquidTraceClient_1["default"](config);
httpClient.createEntities([
    { name: 'users' },
    { name: 'todos' },
    { name: 'comments' }
]);
var endpoints = httpClient.endpoints;
exports.getAll = function (collection) {
    return typesafe_actions_1.createAction(collection + "/GET_ALL", function (resolve) {
        return function () { return resolve(endpoints[collection].getAll()); };
    });
};
exports.toggle = typesafe_actions_1.createAction('todos/TOGGLE', function (resolve) {
    return function (id) { return resolve(id); };
});
var getAllTodos = exports.getAll('todos');
var getAllUsers = exports.getAll('users');
var getAllComments = exports.getAll('comments');
console.log(typeof getAllTodos());
console.log(typeof getAllUsers());
console.log(typeof getAllComments());
