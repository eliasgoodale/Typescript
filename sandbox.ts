import LiquidTraceClient from './requests/LiquidTraceClient'
import * as Rx from 'rxjs/Rx'
import { timer, interval, from, forkJoin, of } from 'rxjs';
import { map, tap, retryWhen, delayWhen, switchMap, concatMap, mergeMap, concatAll, delay } from 'rxjs/operators';
import { isEmpty } from 'rxjs-compat/operator/isEmpty';
import { Observable } from 'rxjs/Observable'

const compare = []

// const toCompare$ = Rx.Observable.create((observer) => {
//     if (compare.length !== 0)
//         const compareData = compare.find()
    
// })




const verified: any = {

}

const mismatch: any = {

}




const verify = (item: any) => {

    verified[item.id] = item;
}


const config = {
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 1000,
}

const api = new LiquidTraceClient(config)

api.createEntities([{name: 'todos'}, {name: 'users'}]);



const getItems = (ids: number[]) => 
    from(ids).pipe(
        mergeMap((itemId: number, index: number) => 
            api.endpoints.todos.getOne({id: itemId})
        )
    )

const N = 99;
const myList = Array.apply(null, {length: N}).map(Number.call, Number)



getItems(myList).subscribe(
    (res: any) => console.log(res.data),
    (err: any) => console.log(err),
    () => console.log('done')
);   



const responseData: any [] = []
const getItemsSorted = (ids: any) => {
    getItems(ids).subscribe((res: any) => {
        responseData.push(res.data)
        responseData.sort((a: any, b: any) => {
            const aIndex = ids.findIndex(id => id === a.id);
            const bIndex = ids.findIndex(id => id === b.id);
            return aIndex - bIndex;
        })
    })
}
getItemsSorted([1,2,3,4]);

setTimeout(() => console.log(responseData), 5000);


/* 
    Fetches a list of items specified by the parameter ids array and
    returns a list of resolved values in the order which they occurred.

    ** Caveat, all requests will have to wait to be returned until all have resolved
    in addition, if any requests fail they will all fail equally

    Use this when you need to fetch a list of items and ensure all are correct
    and in order

const getItems = (ids: number[]) =>
    forkJoin(ids.map(itemId =>
        api.endpoints.todos.getOne({id: itemId}))
    ).pipe(concatAll())
*/


//  getItems([5,6,7]).subscribe(
//      (res: any) => console.log(res.data),
//      (err: any) => console.log(err.response.status),
//      () => console.log('Done')
// );














// const response$ = interval(1000).pipe(
//     switchMap(() => api.endpoints.todos.getOne({id: 999999})))
        
// const sub = response$.subscribe(
//                 (response: any) => console.log(response),
//                 (err: any) => console.log(Object.keys(err)),
//                 () => console.log('Complete')
//             );

        // .subscribe((response: any) => pushToVerify(response.data))


/* 
    Write an Observable that pushes a resolved promise value (resolved or rejected) to a new verified hash table
    and pushes the errors to an errors hash table on an interval.
*/




/*
    Types of Validation:
        Data type:
            Carried out on one or more simple data fields. Can validate integer, float and string. Sophisticated
            examples check length of input. Involves 2 distinct steps
            1.) Validation Check - performs validation check
            2.) Post-Check action - sends feedback to enforce validation
        Range and constraint:
            Validates consistency with min/max range cardinality, regexp etc
        Code and cross-reference:
            Includes tests for data types validation, combined with verification that the user-supplied
            data is consistent with one or more external rules, requirements, or validity constraints
            relevent to a particular organization, context or set of underlying assumptions. The validity
            constraints involve cross-referencing supplied data with a known look-up table
        Structured:
            Combines data-type validation with complex processing proceedures over an entire complex
            data object or set of process operations within a system.
        
        Post-Validation actions:
            Enforcement: 
                Typically rejects data entered by actor and requires that actor to make a change to
                bring the data into compliance.
            Advisory: 
                Typically allow data to be entered unchanged but sends a message to the source
                indicating the the issues encountered during the transaction
            Verification:
                Source actor is asked to verify that the data is correct and that they would like to
                proceed with entering it into the system.
            Log of validation
                Provides a log of validations conducted and their results. Important for application tracking
                application data changes and errors.        
*/