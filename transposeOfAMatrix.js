var grid = [
  [1, 2, 3],
  [5, 9, 8],
];
var row = 2;
var col = 3;
function transpose(grid) {
    var row = 2;
var col = 3;

    const transposedMatrix = [];
    for (let j = 0; j < col; j++) {
        transposedMatrix[j] = [];
    }

  for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
        transposedMatrix[j][i]  = grid[i][j];
      }
    }
    return transposedMatrix;
  }

   function printGridd (grid){ 
  for(var i = 0; i <grid.length; i++) {
    var bag = ""
    for(var j = 0; j < grid[i].length; j++) {
      bag += grid[i][j] + " ";
    }
    console.log(bag);
  }
}
printGridd(grid)
console.log(transpose(grid));



