var grid = [
    [1, 2, 3],
    [5, 9, 8],
    [1, 4, 7],
  ];
  
  
  for(var i = 0; i <grid.length; i++) {
    var bag = ""
    for(var j = 0; j < grid[i].length; j++) {
      bag += grid[i][j] + " ";
    }
    console.log(bag);
  }