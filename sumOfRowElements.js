const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const rowIndex = 1;
function rowSum(matrix, rowIndex) {
    var sum = 0;
  if (rowIndex < 0 || rowIndex >= matrix.length) {
    throw new Error("Invalid rowIndex");
  }
for(var i = 0; i < matrix[rowIndex].length; i++) {
    sum = sum + matrix[rowIndex][i];

}
return sum;
}

const sum1 = rowSum(matrix, rowIndex);

console.log(sum1);
