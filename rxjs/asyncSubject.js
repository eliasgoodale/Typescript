"use strict";
exports.__esModule = true;
var Rx_1 = require("rxjs/Rx");
/*
    An AsyncSubject is a subject where only the final value is sent to its observers, and only when the
    execution completes. Similiar to the last operator, it waits for the complete notification to deliver
    this final value.
*/
var subject = new Rx_1.AsyncSubject();
subject.subscribe({
    next: function (val) { return console.log("observerA: " + val); }
});
subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);
subject.subscribe({
    next: function (val) { return console.log("observerB: " + val); }
});
subject.next(5);
subject.complete();
