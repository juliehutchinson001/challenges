/*
  TL        TR
    a b c d
    e f g h                    TL = (layer, i)
    i j k l                    TR = (i, size-layer)
    m n o p                    BR = (size-layer, size-i)
  B        B                   BL = (size-i, layer)

*/

const rotateFunction = matrix => {
  const layersCount = Math.floor(matrix.length / 2);
  const size = matrix.length - 1;

  for (let layer = 0; layer <= layersCount; layer++) {
    for (let i = layer; i < size - layer; i++) {
      const top = matrix[layer][i];
      const right = matrix[i][size - layer];
      const bottom = matrix[size - layer][size - i];
      const left = matrix[size - i][layer];

      matrix[layer][i] = left;
      matrix[i][size - layer] = top;
      matrix[size - layer][size - i] = right;
      matrix[size - i][layer] = bottom;
    }
  }
  return matrix;
};

/*
  TL        TR
    a b c d
    e f g h
    i j k l
    m n o p
  B        B

*/
const spiralArr = arr => {
  const result = [];
  let topWall = 0;
  let bottomWall = arr.length - 1;
  let leftWall = 0;
  let rightWall = arr[0].length - 1;

  for (let layer = 0; layer <= Math.floor(arr.length / 2); layer++) {
    // loop from left to right
    for (let left = leftWall; left <= rightWall; left++) {
      result.push(arr[topWall][left]);
    }
    topWall += 1;

    // loop to walk top to bottom
    for (let top = topWall; top <= bottomWall; top++) {
      result.push(arr[top][rightWall]);
    }
    rightWall -= 1;

    // loop to walk from right to left
    for (let right = rightWall; right >= leftWall; right--) {
      result.push(arr[bottomWall][right]);
    }
    bottomWall -= 1;

    // loop to walk the bottom
    for (let bottom = bottomWall; bottom >= topWall; bottom--) {
      result.push(arr[bottom][leftWall]);
    }
    leftWall += 1;
  }
  console.log(result);
};

const matrix = [
  ['a', 'b'],
  ['d', 'e'],
  ['g', 'h'],
];
spiralArr(matrix);
