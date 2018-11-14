

/* 
    In javascript we can return an array of values from selected properties via the
    function 
    
    function pluck(o, names) {
        return names.map(n => o[n]);
    }

    In typescript we use index type query and indexed access operators to do the same:

    key of T is the index type query operator. For any type T, keyof T is the union of known,
    public property names of T.

    T[K] is the indexed access operator. dude['name'] has the type Person['name'] which
    is string. Since pluck returns an array of the objects property values, it returns
    a T[K] array or T[K][].

*/

let pluck = <T, K extends keyof T>(o: T, names: K[]): T[K][] => {
    return names.map(n => o[n]);
}

interface Person {
    name: string;
    age: number;
}

let dude: Person = {
    name: 'Jarid',
    age: 35,
}

let strings: string[] = pluck(dude, ['name']); // Will return ['Jarid']
console.log(strings);

/*
    Using
*/
