const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const colIndex = 1;
function columnSum(matrix, colIndex) {
  if (colIndex < 0 || colIndex >= matrix[0].length) {
    throw new Error("Invalid colIndex");
  }

  let sum = 0;

  for (let i = 0; i < matrix.length; i++) {
    if (matrix[i].length <= colIndex) {
      throw new Error("Invalid colIndex");
    }
    sum += matrix[i][colIndex];
  }

  return sum;
}

const sum = columnSum(matrix, colIndex);

console.log(sum);
