function rotate(matrix, direction) {
    const numRows = matrix.length;
    const numCols = matrix[0].length;

    // Initialize the rotated matrix with the dimensions swapped
    let rotatedMatrix = [];
    for (let i = 0; i < numCols; i++) {
        rotatedMatrix[i] = [];
    }

    // Rotate the matrix based on the specified direction
    if (direction === 'clockwise') {
        for (let i = 0; i < numRows; i++) {
            for (let j = 0; j < numCols; j++) {
                rotatedMatrix[j][numRows - 1 - i] = matrix[i][j];
            }
        }
    } else if (direction === 'counterclockwise') {
        for (let i = 0; i < numRows; i++) {
            for (let j = 0; j < numCols; j++) {
                rotatedMatrix[numCols - 1 - j][i] = matrix[i][j];
            }
        }
    } else {
        throw new Error("Invalid direction. Use 'clockwise' or 'counterclockwise'.");
    }

    return rotatedMatrix;
}

// Example usage:
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const rotatedClockwise = rotate(matrix, 'clockwise');
console.log(rotatedClockwise);
/* Output:
[
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
]
*/

const rotatedCounterclockwise = rotate(matrix, 'counterclockwise');
console.log(rotatedCounterclockwise);
/* Output:
[
    [3, 6, 9],
    [2, 5, 8],
    [1, 4, 7]
]
*/
