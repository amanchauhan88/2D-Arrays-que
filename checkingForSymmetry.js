

function isSymmetric(matrix) {

    if (!matrix || matrix.length === 0 || !Array.isArray(matrix[0])) {
        throw new Error("Invalid input matrix");
    }

    const row = matrix.length;
    const col = matrix[0].length;

    // Check if the matrix is square
    if (row !== col) {
        return false;
    }

    // Check if the matrix is symmetric
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (matrix[i][j] !== matrix[j][i]) {
                return false;
            }
        }
    }

    return true;
}
const symmetricMatrix = [
    [1, 2, 3],
    [2, 4, 5],
    [3, 5, 6]
];
console.log(isSymmetric(symmetricMatrix)); // Output: true

const nonSymmetricMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];


console.log(isSymmetric(nonSymmetricMatrix)); // Output: false
