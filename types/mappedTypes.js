/*
    We can map types by transforming each property in the old type to a new property
    as in the Readonly or Partial types.

    Defined in lib.es5.d.ts

    Transforms the type passed to a type with all of its properties as readonly
    type Readonly<T> = {
        readonly [P in keyof T]: T[P];
    }

    Transforms the type passed to a type with all of its properties as optional
    type Partial<T> = {
        [P in keyof T]?: T[P]
    }

*/
/* maps to:
    type Flags = {
        option1: boolean;
        option2: boolean;
    }
*/
