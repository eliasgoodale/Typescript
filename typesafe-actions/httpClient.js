"use strict";
exports.__esModule = true;
var LiquidTraceClient_1 = require("../requests/LiquidTraceClient");
var config = {
    baseURL: 'https://jsonplaceholder.typicode.com'
};
exports.config = config;
var httpClient = new LiquidTraceClient_1["default"](config);
exports.httpClient = httpClient;
httpClient.createEntities([
    { name: 'users' },
    { name: 'todos' },
    { name: 'comments' }
]);
