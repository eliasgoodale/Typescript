"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
/*
    create(subscribe: function) intakes a subscribe function and returns an observable:

    Values are emitted by calling next(value)
    Errors are caught in a try catch block and route to the second callback in subscribe.
    Complete is emitted when observers are all unsubscribed or complete() is called
*/
var hello = rxjs_1.Observable.create(function (observer) {
    observer.next('Hello');
    observer.next('World');
});
var sub = hello.subscribe(function (val) { return console.log(val); });
var evenNumbers = rxjs_1.Observable.create(function (observer) {
    var value = 0;
    var interval = setInterval(function () {
        if (value % 2 === 0) {
            observer.next(value);
        }
        value++;
    }, 1000);
    return function () { return clearInterval(interval); };
});
var subscribe = evenNumbers.subscribe(function (val) { return console.log(val); });
setTimeout(function () {
    subscribe.unsubscribe();
}, 10001);
