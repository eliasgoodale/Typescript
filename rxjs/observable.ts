import { Observable, Observer, Subscription, interval } from 'rxjs'

/* 
    Async/Sync Observer:
    The following is an observer that pushes the values 1, 2, and 3 sychronously when subscribed,
    and the value of 4 after 1 second has passed since the subscribe call then completes
*/

const observable: Observable<number> = Observable.create( (observer: Observer<number>) => {
    observer.next(1);
    observer.next(2);
    observer.next(3);

    setTimeout(() => {
        observer.next(4);
        observer.complete();
    }, 1000);
});

console.log('Just before call to subscribe');
observable.subscribe({
    next: (x: number) => console.log(`got value ${x}`), //sends value
    error: (err: string) => console.error(`something wrong occurred ${err}`), //sends error
    complete: () => console.log('done'), //sends nothing
});
console.log('Right after subscribe');

/*
    Subscribing to observables.
    The following emits "hi" to all of its subscribers every second
*/

const observableStringEmitter: Observable<string> = Observable.create(
    function subscribe(observer: Observer<string>) {
        setInterval( () => {
            observer.next("hi");
        }, 1000);
});

observableStringEmitter.subscribe((x: string) => console.log(x));

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

const observableWithErrorDelivery: Observable<number> = Observable.create( (observer: Observer<number>) => {
    try {
        observer.next(1);
        observer.next(2);
        observer.next(3);
        observer.complete();
    } catch (err) {
        observer.error(err); //delivers error if caught
    }
})

/* When subscribing you get back a subscription objec which represents the ongoing execution */
const subscriptionToErrorObservable: Subscription = observableWithErrorDelivery.subscribe((x: number) => console.log(x));

/* Unsubscribe from observable */
subscriptionToErrorObservable.unsubscribe();

/* 
    Sometimes we need custom Observable unsubscribe behavior, we do this by returning a custom function
    from unsubscribe(); 
*/

const customUnsObserver: Observable<string> = Observable.create( (observer: Observer<string>) => {
    /* Keeps track of interval resource */
    let intervalID: NodeJS.Timer = setInterval(() => {
        observer.next('hi');
    }, 1000);
    /* Provides method to cancel and dispose of interval resource */
    return function unsubscribe() {
        clearInterval(intervalID);
    } 
});

