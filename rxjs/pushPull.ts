
import { Observable, NextObserver } from 'rxjs';
/*
    Push versus Pull:

    Push and pull are two different protocals describing how a data Producer can
    communicate with a data Consumer.

    Pull: Consumer determines when it receives data from the data Producer, Producer
    is unaware when data will be delivered to the Consumer.

    Javascript functions are pull systems: the function being the producer and the caller
    being the consumer by pulling out a single return value from its call.
    Generator functions and iterators are another type of pull system (code calling 
    iterator.next() is a consumer).

    The producer is Passive(pushes data when requested), the consumer is Active(decides when
    data is requested)


    Push: In a push system, the Producer determines when data is sent to the Consumer. Consumer
    is unaware when it will receive data. 

    Promises are the most common type of push system in JS today. A Promise(producer) delivers a
    resolved value to registered callbacks(Consumers) but unlike functions, Promises determine 
    precisely when the value is pushed to the callbacks.

    RxJs introduces Observables, a new Push system for Javascript. Observables are producers of 
    multiple values, "pushing" them to Observers(consumers).

    

*/

/* A function is a lazily evaluated computation that synchronously returns a single value */
function foo (): number {
    console.log('Hello');
    return 42;
}

const x = foo.call(this);
console.log(x);
const y = foo.call(this);
console.log(y);

/* The same behavior can be reproduced with observables because they are lazy computations as well. */

const obsFoo = Observable.create( (observer: any) => {
    console.log('Hello');
    observer.next(42);
})

obsFoo.subscribe( (x: number) => console.log(x));
obsFoo.subscribe( (y: number) => console.log(y));


/* 
    If we dont call the function console.log("Hello") doesnt happen, same as if we dont subscribe
    with the observable. Calling and subscribing are isolated operations. Two function calls trigger
    two separate side effects, the same as tow Observable subscribes trigger the same. 

    Observables are NOT event emitters. Event emitters share side effects and have eager execution
    regardless of the existence of their subscribers. Observables have NO SHARED EXECUTION and are
    therefore lazy.

    Subscribing to an Observable is analogous to calling a function.

    Observables can deliver values synchronously or asynchronously, They also allow you the
    ability to return multiple values over time unlike functions 
*/


const bar = (): number => {
    console.log('hello');
    return 42;
    //return 100; <-- unreachable code
}

const obsBar: Observable<number> = Observable.create( (observer: NextObserver<number>) => {
    console.log('Hello');
    observer.next(42);
    observer.next(100); // returning multiple values synchronously.
    observer.next(200);

    setTimeout(() => {
        observer.next(300); //returning a value asychronously
    }, 1000);
});

console.log('Before observer subscription');
obsBar.subscribe((x: number) => console.log(x));
console.log('After subscription');

/*
    func.call() means "give me one value synchronously"
    observable.subscribe() means "give me any amount of values synchronously or asychronously"
*/





