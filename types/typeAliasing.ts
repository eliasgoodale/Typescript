/* 
    Type aliasing creates a new name for a type. Type aliases are similiar to interfaces.
*/

type Name = string;
type NameResolver = () => string;

let myVar: NameResolver = () => "hello";

myVar();