"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
/*
    Observers:
        Observers are consumers of values delivered by observables. Simply put: they are a set of callbacks,
        one for each type of notification delivered by the observable:
        
        next, error, and complete.
*/
var observer = {
    next: function (x) { return console.log("Observer got next value: " + x); },
    error: function (err) { return console.error("Observer got error " + err.message); },
    complete: function () { return console.log('Observer got a complete notification'); }
};
/* Observers can be partial as well */
var partialObserver = {
    next: function (x) { return console.log("Observer got next value: " + x); },
    error: function (err) { return console.error("Observer got error " + err.message); }
};
/*
    A subscription (returned from a call to observable.subscribe()) has a method called unsubscribe()
    that releases resources or cancles observable exececution. Subscriptions can also use the add method
    to have child subscriptions and a call to unsubscribe will unsubscribe all children as well.
    The .remove() method removes a child from the parent subscription.
*/
var observable1 = rxjs_1.interval(400);
var observable2 = rxjs_1.interval(300);
var subscription = observable1.subscribe(function (x) { return console.log("first: " + x); });
var childSubscription = observable2.subscribe(function (x) { return console.log("second: " + x); });
subscription.add(childSubscription);
setTimeout(function () {
    subscription.unsubscribe();
}, 1000);
