"use strict";
exports.__esModule = true;
var Rx_1 = require("rxjs/Rx");
/*
    To avoid explicit calls to connect we use the refCount method. This returns an observable that keeps track
    of how many subscribers it has. When the number of subscribers goes from 0 to 1 it will call connect for us,
    starting the shared execution state. Likewise, when the subscriber count drops to 0 it will stop further
    execution.
*/
var rcSource = Rx_1.Observable.interval(500);
var rcSubject = new Rx_1.Subject();
var refCounted = rcSource.multicast(rcSubject).refCount();
var rcSub1, rcSub2, rcSubConnect;
console.log('observerA subscribed');
rcSub1 = refCounted.subscribe({
    next: function (val) { return console.log("observerA: " + val); }
});
setTimeout(function () {
    console.log('observerB subscribed');
    rcSub2 = refCounted.subscribe({
        next: function (val) { return console.log("observerB: " + val); }
    });
}, 600);
setTimeout(function () {
    console.log('observerA unsubscribed');
    rcSub1.unsubscribe();
}, 1200);
setTimeout(function () {
    console.log('observerB unsubscribed');
    rcSub2.unsubscribe();
}, 2000);
