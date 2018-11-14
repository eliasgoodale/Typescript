type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type PartialPick<T, K extends keyof T> = Partial<T> & Pick<T, K>;

/* 
    Omit is equal to Pick of all of the keys 

    type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
*/

namespace TodoActions {
    export enum Type {
      ADD_TODO = 'ADD_TODO',
      EDIT_TODO = 'EDIT_TODO',
      DELETE_TODO = 'DELETE_TODO',
      COMPLETE_TODO = 'COMPLETE_TODO',
      COMPLETE_ALL = 'COMPLETE_ALL',
      CLEAR_COMPLETED = 'CLEAR_COMPLETED'
    }
    export const num: number = 1
    export const str: string = ""
}

type TodoActions = Omit<typeof TodoActions, 'Type'>;


let myTodoActions: TodoActions = {num: 1, str: "hshe"}



interface Task {
    id: string,
    name: string,
    contacts: any[],
}



/* 
    With the Omit type you are able to create a new type without some of the original keys.
    The keys passed in must be in Task to use it, using a key that is not within task
    will result in an error.
*/
let myObj: Task = {
    id: "1234",
    name: "billy",
    contacts: [],
}
let wrongObj: Omit<Task, 'contacts'> = {
    id: "1234",
    name: "billy",
}

type CulledTask = Omit<Task, 'contacts'>
type returnTask<T> = () => T;

let retTask:returnTask<Task> = () => myObj;

let newObj = retTask();

console.log(newObj)

let myTask1: CulledTask = {
    id: "184302",
    name: "hello",
}

/*
    With partial pick the following example creates a type that makes the selected values required,
    and the rest of the values optional in the new type. The only required field is contacts, but
    we can add in id or name as well.
*/

type PPTask = PartialPick<Task, 'contacts'>

let myTask2: PPTask = {
    id: "101010",
    contacts: [],
}
