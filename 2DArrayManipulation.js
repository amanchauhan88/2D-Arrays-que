const matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const matrix2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];


function addMatrix(matrix1, matrix2) {
    const numRows1 = matrix1.length;
    const numCols1 = matrix1[0].length;
    const numRows2 = matrix2.length;
    const numCols2 = matrix2[0].length;

    if (numRows1 !== numRows2 || numCols1 !== numCols2) {
        throw new Error("Matrices dimensions are not compatible for addition.");
    }

    let resultMatrix = [];
    for (let i = 0; i < numRows1; i++) {
        resultMatrix[i] = [];
    }

    // Add 
    for (let i = 0; i < numRows1; i++) {
        for (let j = 0; j < numCols1; j++) {
            resultMatrix[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }

    return resultMatrix;
}



const sumMatrix = addMatrix(matrix1, matrix2);
console.log(sumMatrix);
/* Output:
[
    [10, 10, 10],
    [10, 10, 10],
    [10, 10, 10]
]
*/
