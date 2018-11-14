"use strict";
exports.__esModule = true;
var Rx_1 = require("rxjs/Rx");
var multiplyByTen = function (input) {
    var output = Rx_1.Observable.create(function (observer) {
        input.subscribe({
            next: function (val) { return observer.next(10 * val); },
            error: function (err) { return observer.error(err.message); },
            complete: function () { return observer.complete(); }
        });
    });
    return output;
};
var input = Rx_1.Observable.from([1, 2, 3, 4]);
var output = multiplyByTen(input);
/* Calling subscribe here on the output observable will cause the input observable to be subscribed */
output.subscribe(function (val) { return console.log(val); });
/**
 * Static Operators are pure functions attached to the observable class and rely entirely on arguments.
 * The most common type, creation operators take a non-Observable argument and create a nuew Observable.
 *
 * interval() is one such example: it intakes a number and produces an observable
 * merge() is an example of a static operator that takes multiple Observables.
 */
var observableSlowInterval = Rx_1.Observable.interval(1000);
var observableFastInterval = Rx_1.Observable.interval(300);
var merged = Rx_1.Observable.merge(observableFastInterval, observableSlowInterval);
merged.subscribe(function (val) { return console.log(val); });
