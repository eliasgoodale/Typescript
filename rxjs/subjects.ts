import { Observable, Subject, Observer, from, Subscription } from 'rxjs'

/*
    A subject is a special type of observable that allows values to be multicast to many Observers.
    Plain observers are unicast(wherein each subscribed observer owns an independent execution of 
    the observable). Subjects resemble EventEmitters, and maintain a registry of listeners. 

    Observers have no knowledge of if the observable is a subject or not.

    Every subject is an observable and an observer, you may subscribe to it by providing an observer that
    will then receive values
*/

let subject: Subject<number> = new Subject();

subject.subscribe({
    next: (val) => console.log(`Observer A: ${val}`),
});
subject.subscribe({
    next: (val) => console.log(`Observer B: ${val}`),
});

subject.next(1);
subject.next(2);

let observable: Observable<number> = from([1, 2, 3]);

/* MultiCast subscription */
let observableSubjectSubscription: Subscription = observable.subscribe(subject);

observableSubjectSubscription.unsubscribe();