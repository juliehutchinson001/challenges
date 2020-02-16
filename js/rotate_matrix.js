/*
  [         t
    l  [a, b, c, d],                   size = arr.length - 1;
		l  [e, f, g, h],  r
		l  [i, j, k, l],
		l  [m, n, o, p]
  ]        b
*/

const rotatingMatrixIteractively = (arr, direction) => {
  const size = arr.length - 1;
  const loopLength = Math.floor(arr.length / 2);

  for (let ly = 0; ly <= loopLength; ly++) {
    for (let i = ly; i < size - ly; i++) {
      const t = arr[ly][i];
      const r = arr[i][size - ly];
      const b = arr[size - ly][size - i];
      const l = arr[size - i][ly];
      if (direction === 'clockwise') {
        arr[ly][i] = l;
        arr[i][size - ly] = t;
        arr[size - ly][size - i] = r;
        arr[size - i][ly] = b;
      } else {
        arr[ly][i] = r;
        arr[i][size - ly] = b;
        arr[size - ly][size - i] = l;
        arr[size - i][ly] = t;
      }
    }
  }
  return arr;
};

const sampleArr = [
  ['a', 'b', 'c', 'd'],
  ['e', 'f', 'g', 'h'],
  ['i', 'j', 'k', 'l'],
  ['m', 'n', 'o', 'p'],
];

console.log(rotatingMatrixIteractively(sampleArr, 'clockwise'));
