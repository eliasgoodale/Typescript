import { Observable, Observer } from 'rxjs/Rx'
import * as Rx from 'rxjs/Rx'

/* 
    Operators such as .map(), .filter() and .merge() do not change the existing observable insance. The return
    a new observable whose subscriber logic is based on the first Observable. An operator is a pure function
    that takes one observable and returns another as output. Subscribing to the output observable will also
    subscribe to the input observable. This is called the operator subscription chain.
*/

declare type HomogenousObserverOperator<T> = (input: Observable<T>) => Observable<T>

const multiplyByTen: HomogenousObserverOperator<number> = (input: Observable<number>): Observable<number> => {
    const output: Observable<number> = Observable.create((observer: Observer<number>) => {
        input.subscribe({
            next: (val: number) => observer.next(10 * val),
            error: (err: Error) => observer.error(err.message),
            complete: () => observer.complete(),
        })
    })
    return output;
}

let input: Observable<number> = Observable.from([1, 2, 3, 4]);
let output: Observable<number> = multiplyByTen(input);

/* Calling subscribe here on the output observable will cause the input observable to be subscribed */
output.subscribe((val: number) => console.log(val));

/**
 * Static Operators are pure functions attached to the observable class and rely entirely on arguments.
 * The most common type, creation operators take a non-Observable argument and create a nuew Observable.
 * 
 * interval() is one such example: it intakes a number and produces an observable
 * merge() is an example of a static operator that takes multiple Observables.
 */

 let observableSlowInterval: Observable<number> = Observable.interval(1000);
 let observableFastInterval: Observable<number> = Observable.interval(300);

 let merged: Observable<number> = Observable.merge(observableFastInterval, observableSlowInterval);

 merged.subscribe((val: number) => console.log(val));
