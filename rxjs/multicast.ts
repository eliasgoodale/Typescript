import { Observable, ConnectableObservable, Subject } from 'rxjs'
import * as Rx from 'rxjs/Rx'

/**
 *  A multicasted Observable uses a Subject under the hood to make multiple observers 
 *  see the same observable execution.
 * 
 *  multicast() returns a ConnectableObservable that looks like a subject when subscribing.
 *  The ConnectableObservable is just an observable with a connect method. This method determines when the shared
 *  execution starts. Connect calls source.subscribe(subject) under the hood, returning a subscription that 
 *  you can subsequently unsubscribe from in order to cancel a shared Observable execution.
 */

 let source: Observable<number> = Rx.Observable.from([1, 2, 3]);
 let subject: Subject<number> = new Subject();
 let multicasted: ConnectableObservable<number> = source.multicast(subject);

 multicasted.subscribe({
    next: (v: number) => console.log('observerA: ' + v)
  });
  multicasted.subscribe({
    next: (v: number) => console.log('observerB: ' + v)
  });
  
  // This is, under the hood, `source.subscribe(subject)`:
  multicasted.connect();

