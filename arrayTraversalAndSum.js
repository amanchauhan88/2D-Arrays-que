var array = [
  [1, 2, 3],
  [5, 9, 8],
  [1, 4, 7],
];
function add(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array[i].length; j++) {
      sum = sum + array[i][j];
    }
  }

  return sum;
}

console.log(add(array));
