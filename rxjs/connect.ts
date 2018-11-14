import { Observable, ConnectableObservable, Subject, Subscription } from 'rxjs/Rx'
// import * as Rx from 'rxjs/Rx'

/*
    The connect() method returns a subscription to a multicasted subject. However, calling this method manually
    is cumbersome. Usually we want to automatically connect when the first Observer arrives, and cancel the
    shared execution when the final observer unsubscribes.
    
    1.) First Observer subscribes to the multicasted Observable
    2.) The multicasted Observable is connected
    3.) The next value 0 is delivered to the first Observer
    4.) Second Observer subscribes to the multicasted Observable
    5.) The next value 1 is delivered to the first Observer
    6.) The next value 1 is delivered to the second Observer
    7.) First Observer unsubscribes from the multicasted Observable
    8.) The next value 2 is delivered to the second Observer
    9.) Second Observer unsubscribes from the multicasted Observable
    10.) The connection to the multicasted Observable is unsubscribed 
    
    
    Doing this with explicit calls to connect() we write the following code:
*/

let source: Observable<number> = Observable.interval(500);
let subject: Subject<number> = new Subject();
let multicasted: ConnectableObservable<number> = source.multicast(subject);
let subscription1: Subscription, subscription2: Subscription

console.log('observerA subscribed');
subscription1 = multicasted.subscribe({
    next: (val: number) => console.log(`observerA: ${val}`),
});

let subscriptionConnect: Subscription = multicasted.connect();

setTimeout(() => {
    console.log('observerB subscribed');
    subscription2 = multicasted.subscribe({
        next: (val: number) => console.log(`observerB: ${val}`),
    });
}, 600);

setTimeout(() => {
    console.log('observerA unsubscribed');
    subscription1.unsubscribe();
}, 1200);

setTimeout(() => {
    console.log('observerB unsubscribed');
    subscription2.unsubscribe();
}, 2000);


