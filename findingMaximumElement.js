var grid = [
  [1, 2, 3],
  [5, 9, 8],
  [1, 99, 7],
];
var max = -1;

function findMax(max) {
  for (var i = 0; i < grid.length; i++) {
    var bag = "";
    for (var j = 0; j < grid[i].length; j++) {
      if (grid[i][j] > max) {
        max = grid[i][j];
      }
    }
  }
  return max;
}

console.log(findMax(max));