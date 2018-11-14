


/* Two ways to do type assertion */

let message
message = 'abc'
/* Cast */
let endsWithC: boolean = (<string>message).endsWith('c')

/* as keyword */

let alternativeWay = (message as string).endsWith('c')


/* Functional parameter type assertion (inline annotation) */

