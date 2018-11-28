function invalidSquare(grid: boolean[][], row: number, col: number) {
    return row === grid.length || col === grid.length || grid[row][col]
}

function isAtEnd(grid: boolean[][], row: number, col: number) {
    if (row === grid.length && col === grid.length)
        return true
}

function countPaths(grid: boolean[][], row: number, col: number) {
    if (invalidSquare(grid, row, col))
        return (0);
    if (isAtEnd(grid, row, col))
        return (1);
    return countPaths(grid, row + 1, col) + countPaths(grid, row, col + 1);
}

const grid: boolean[][] = [
    [false, false, false, false, false, false, false, false],

    [false, false, true , false, false, false, true , false],

    [false, false, false, false, true , false, false, false],

    [true , false, true , false, false, true , false, false],

    [false, false, true , false, false, false, false, false],

    [false, false, false, true , true , false, true , false],

    [false, true , false, false, false, true , false, false],

    [false, false, false, false, false, false, false, false],

]

const numPaths = countPaths(grid, 0, 0);
console.log(numPaths);