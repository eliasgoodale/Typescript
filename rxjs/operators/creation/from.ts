import { from } from 'rxjs'

/* 
    The from operator turns an array, promise, or iterable into an Observable
*/

const promiseSource = from(new Promise(resolve => resolve('Hello World!')));

const subscribe = promiseSource.subscribe(val => console.log(val));