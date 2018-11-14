"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
/*
    The from operator turns an array, promise, or iterable into an Observable
*/
var promiseSource = rxjs_1.from(new Promise(function (resolve) { return resolve('Hello World!'); }));
var subscribe = promiseSource.subscribe(function (val) { return console.log(val); });
