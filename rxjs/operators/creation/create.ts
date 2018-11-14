import { Observable } from 'rxjs'

/*
    create(subscribe: function) intakes a subscribe function and returns an observable:

    Values are emitted by calling next(value) 
    Errors are caught in a try catch block and route to the second callback in subscribe.
    Complete is emitted when observers are all unsubscribed or complete() is called
*/

const hello = Observable.create((observer: any) => {
    observer.next('Hello');
    observer.next('World');
});

const sub = hello.subscribe(val => console.log(val));

const evenNumbers = Observable.create((observer: any) => {
    let value = 0;
    const interval = setInterval(() => {
        if (value % 2 === 0) {
            observer.next(value);
        }
        value++;
    }, 1000);

    return () => clearInterval(interval);
})

const subscribe = evenNumbers.subscribe(val => console.log(val));

setTimeout(() => {
    subscribe.unsubscribe()
}, 10001);


