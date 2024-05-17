const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function diagonalSum(matrix) {
  const numRows = matrix.length;

  for (let i = 0; i < numRows; i++) {
    if (matrix[i].length !== numRows) {
      throw new Error("The input matrix is not square.");
    }
  }

  let sum = 0;

  // Calculate the sum of the main diagonal
  for (let i = 0; i < numRows; i++) {
    sum += matrix[i][i];
  }

  return sum;
}

const sum = diagonalSum(matrix);

console.log(sum); // Output: 15
