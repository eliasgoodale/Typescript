"use strict";
exports.__esModule = true;
var typesafe_actions_1 = require("typesafe-actions");
var httpClient_1 = require("./httpClient");
var endpoints = httpClient_1.httpClient.endpoints;
var httpActionGroup;
(function (httpActionGroup) {
    httpActionGroup.getAll = function (entity) {
        return typesafe_actions_1.createAction(entity + "/GET_ALL", function (resolve) {
            return function () { return resolve(endpoints[entity].getAll()); };
        });
    };
    httpActionGroup.getOne = function (entity) {
        return typesafe_actions_1.createAction(entity + "/GET_ONE", function (resolve) {
            return function (id) { return resolve(endpoints[entity].getOne({ id: id })); };
        });
    };
    httpActionGroup.create = function (entity) {
        return typesafe_actions_1.createAction(entity + "/CREATE", function (resolve) {
            return function (item) { return resolve(endpoints[entity].create(item)); };
        });
    };
    httpActionGroup.update = function (entity) {
        return typesafe_actions_1.createAction(entity + "/UPDATE", function (resolve) {
            return function (item) { return resolve(endpoints[entity].update(item)); };
        });
    };
})(httpActionGroup || (httpActionGroup = {}));
exports.httpActionGroup = httpActionGroup;
