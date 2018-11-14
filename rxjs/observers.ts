import { Observable, Observer, Subscription, interval } from 'rxjs'
/*
    Observers:
        Observers are consumers of values delivered by observables. Simply put: they are a set of callbacks,
        one for each type of notification delivered by the observable: 
        
        next, error, and complete.
*/

let observer: Observer<number> = {
    next: (x: number) => console.log(`Observer got next value: ${x}`),
    error: (err: Error) => console.error(`Observer got error ${err.message}`),
    complete: () => console.log('Observer got a complete notification'),
}

/* Observers can be partial as well */

let partialObserver: Partial<Observer<number>> = {
    next: (x: number) => console.log(`Observer got next value: ${x}`),
    error: (err: Error) => console.error(`Observer got error ${err.message}`),
}

/*
    A subscription (returned from a call to observable.subscribe()) has a method called unsubscribe() 
    that releases resources or cancles observable exececution. Subscriptions can also use the add method
    to have child subscriptions and a call to unsubscribe will unsubscribe all children as well.
    The .remove() method removes a child from the parent subscription.
*/

let observable1: Observable<number> = interval(400);
let observable2: Observable<number> = interval(300);



let subscription: Subscription = observable1.subscribe((x: number) => console.log(`first: ${x}`))
let childSubscription: Subscription = observable2.subscribe((x: number) => console.log(`second: ${x}`));

subscription.add(childSubscription);

setTimeout(() => {
    subscription.unsubscribe();
}, 1000);

