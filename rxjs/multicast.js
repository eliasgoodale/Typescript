"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
var Rx = require("rxjs/Rx");
/**
 *  A multicasted Observable uses a Subject under the hood to make multiple observers
 *  see the same observable execution.
 *
 *  multicast() returns a ConnectableObservable that looks like a subject when subscribing.
 *  The ConnectableObservable is just an observable with a connect method. This method determines when the shared
 *  execution starts. Connect calls source.subscribe(subject) under the hood, returning a subscription that
 *  you can subsequently unsubscribe from in order to cancel a shared Observable execution.
 */
var source = Rx.Observable.from([1, 2, 3]);
var subject = new rxjs_1.Subject();
var multicasted = source.multicast(subject);
multicasted.subscribe({
    next: function (v) { return console.log('observerA: ' + v); }
});
multicasted.subscribe({
    next: function (v) { return console.log('observerB: ' + v); }
});
// This is, under the hood, `source.subscribe(subject)`:
multicasted.connect();
