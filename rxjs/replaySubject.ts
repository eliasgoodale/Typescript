import { ReplaySubject } from 'rxjs/Rx'

/*
    A ReplaySubject can send old values to new subscibers and record part of the observable execution. It records
    multiple values from the Observable execution
*/

let subject: ReplaySubject<number> = new ReplaySubject(3);

subject.subscribe({
    next: (val: number) => console.log(`observerA: ${val}`),
});

subject.next(1);
subject.next(2);
subject.next(3);
subject.next(4);

subject.subscribe({
    next: (val: number) => console.log(`observerB: ${val}`),
});

subject.next(5);

/*
    You can also specify a window time in milliseconds, in addition to the buffer size to determine how old
    the recorded values can be. In the following example we can use a large buffer size but with a window
    time parameter of 500 milliseconds. This will replay the events that happened in that time window back to
    any Observer subscribing to the ReplaySubject.
*/

let timedReplaySubject: ReplaySubject<number> = new ReplaySubject(100, 500);

subject.subscribe({
    next: (val: number) => console.log(`observerA: ${val}`),
});

let i: number = 1;
setInterval(() => subject.next(i++), 200);
setTimeout(() => {
    subject.subscribe({
        next: (val: number) => console.log(`observableB: ${val}`),
    });
}, 1000);
