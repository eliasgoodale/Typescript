"use strict";
exports.__esModule = true;
var rxjs_1 = require("rxjs");
/*
    Async/Sync Observer:
    The following is an observer that pushes the values 1, 2, and 3 sychronously when subscribed,
    and the value of 4 after 1 second has passed since the subscribe call then completes
*/
var observable = rxjs_1.Observable.create(function (observer) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    setTimeout(function () {
        observer.next(4);
        observer.complete();
    }, 1000);
});
console.log('Just before call to subscribe');
observable.subscribe({
    next: function (x) { return console.log("got value " + x); },
    error: function (err) { return console.error("something wrong occurred " + err); },
    complete: function () { return console.log('done'); }
});
console.log('Right after subscribe');
/*
    Subscribing to observables.
    The following emits "hi" to all of its subscribers every second
*/
var observableStringEmitter = rxjs_1.Observable.create(function subscribe(observer) {
    setInterval(function () {
        observer.next("hi");
    }, 1000);
});
observableStringEmitter.subscribe(function (x) { return console.log(x); });
/*
    Anatomy of Observables:

    Each observable insance is created with .create() or creation operators (of from etc).
    You can subscribe with an observer, execute to deliver next, error or complete
    notifications to the observer, and dispose of the observable.
    
    Create, Subscribe, Execute, Dispose.

    observable.prototype.create() takes in one argument, the subscribe function.

    When subscribing to an observable, the observable has no concept of who is subscribed it is just
    like calling a function.

    When executing an observable there are 3 types of values that can be delivered:
        next: sends a value
        error: sends a JS Error or exception
        complete: does not send a value

    Each call to next delivers a value to the the observer. a call to error or complete stops delivery.
*/
/* Use a try catch block to deliver error notifications */
var observableWithErrorDelivery = rxjs_1.Observable.create(function (observer) {
    try {
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.complete();
    }
    catch (err) {
        observer.error(err); //delivers error if caught
    }
});
/* When subscribing you get back a subscription objec which represents the ongoing execution */
var subscriptionToErrorObservable = observableWithErrorDelivery.subscribe(function (x) { return console.log(x); });
/* Unsubscribe from observable */
subscriptionToErrorObservable.unsubscribe();
/*
    Sometimes we need custom Observable unsubscribe behavior, we do this by returning a custom function
    from unsubscribe();
*/
var customUnsObserver = rxjs_1.Observable.create(function (observer) {
    /* Keeps track of interval resource */
    var intervalID = setInterval(function () {
        observer.next('hi');
    }, 1000);
    /* Provides method to cancel and dispose of interval resource */
    return function unsubscribe() {
        clearInterval(intervalID);
    };
});
