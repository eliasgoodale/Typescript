var items: number[][] = [ 
/** Weight,     Price**/
    [0,            0],
    [1,            5],
    [2,            3],
    [4,            5],
    [2,            3],
    [5,            2],
    [1,           37],

];

enum Index {
    WEIGHT,
    VALUE
}

function max(a, b) {
    return a >= b ? a : b;
}

/**
 *  Knapsack: Given the following weights and values, deduce
 *  the best possible total value of items you can have in your knapsack
 *  from the list.
 * @param n = number of items left to consider 
 *            placing into the knapsack
 * @param C = capacity remaining in the knapsack
 */
function knapSack(n: number, C: number): number {
    let result: number;
    let tmp1: number;
    let tmp2: number;
    /**
     * If no items remain to be considered, or
     * there is no room left in the knap sack
     * we have reached the base case.
     */
    if (n === 0 || C === 0) {
        result = 0;
    }
    /**
     * If we do not have room for the item, move to the next
     */
    else if (items[n][Index.WEIGHT] > C){
        result = knapSack(n - 1, C);
    }
    else {
        tmp1 = knapSack(n - 1, C);
        tmp2 = items[n][Index.VALUE] + knapSack(n - 1, C - items[n][Index.WEIGHT])
        result = max(tmp1, tmp2)
    }
    return result;
}

const ks = knapSack(6, 10);
console.log(ks);