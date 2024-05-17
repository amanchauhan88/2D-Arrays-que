const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
function flatten(matrix) {
  // Initialize an empty array to hold the flattened elements
  let flattenedArray = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      // Add the element to the flattened array
      flattenedArray.push(matrix[i][j]);
    }
  }

  return flattenedArray;
}

const flattened = flatten(matrix);

console.log(flattened); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
