"use strict";
exports.__esModule = true;
var Rx_1 = require("rxjs/Rx");
/*
    BehaviorSubjects have a concept of "current value". They store the lates value emitted to consumers
    and whenever a new Observer subscribes it immediately receives the current value from the BehaviorSubject.

    In the following example, the subject will create 2 subscriptions. The first will receive the values
    0, 1 and 2, next, the subject will create a second subscription and will receive the value of 2 as well.
    next they both will receive the value of 3.
*/
var subject = new Rx_1.BehaviorSubject(0);
subject.subscribe({
    next: function (val) { return console.log("observerA: " + val); }
});
subject.next(1);
subject.next(2);
subject.subscribe({
    next: function (val) { return console.log("observerB: " + val); }
});
subject.next(3);
