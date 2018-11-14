import { Observable, ConnectableObservable, Subject, Subscription } from 'rxjs/Rx'

/* 
    To avoid explicit calls to connect we use the refCount method. This returns an observable that keeps track
    of how many subscribers it has. When the number of subscribers goes from 0 to 1 it will call connect for us,
    starting the shared execution state. Likewise, when the subscriber count drops to 0 it will stop further
    execution.
*/

let rcSource: Observable<number> = Observable.interval(500);
let rcSubject: Subject<number> = new Subject();
let refCounted: Observable<number> = rcSource.multicast(rcSubject).refCount();
let rcSub1: Subscription, rcSub2: Subscription, rcSubConnect: Subscription;

console.log('observerA subscribed');
rcSub1 = refCounted.subscribe({
    next: (val: number) => console.log(`observerA: ${val}`),
});

setTimeout(() => {
    console.log('observerB subscribed');
    rcSub2 = refCounted.subscribe({
        next: (val: number) => console.log(`observerB: ${val}`)
    });
}, 600);

setTimeout(() => {
    console.log('observerA unsubscribed');
    rcSub1.unsubscribe();
}, 1200);

setTimeout(() => {
    console.log('observerB unsubscribed');
    rcSub2.unsubscribe();
}, 2000);
