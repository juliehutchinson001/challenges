const mergeFunction = (leftArr, rightArr) => {
  const tempArr = [];
  const lastPosOfArr = !tempArr.length ? 0 : tempArr.length;

  const areArraysNotEmpty = leftArr.length && rightArr.length;

  while (areArraysNotEmpty) {
    if (leftArr[0] > rightArr[0]) {
      tempArr[lastPosOfArr] = rightArr[0];
      rightArr.shift();
    } else {
      tempArr[lastPosOfArr] = leftArr[0];
      leftArr.shift();
    }
  }

  while (leftArr.length) {
    tempArr[lastPosOfArr] = leftArr[0];
    leftArr.shift();
  }

  while (rightArr.length) {
    tempArr[lastPosOfArr] = rightArr[0];
    rightArr.shift();
  }
};

const mergeSort = arr => {
  const lengthOfArr = arr.length;

  if (lengthOfArr < 2) return arr;
  console.log(`Original array: ${arr}\n\n`);

  const leftArray = mergeSort(arr.slice(0, Math.round(lengthOfArr / 2)));
  console.log(`left partitioned arr: ${leftArray}\n`);
  const rightArray = mergeSort(arr.slice(Math.round(lengthOfArr / 2) + 1));
  console.log(`right partitioned arr: ${rightArray}\n\n`);

  return mergeFunction(leftArray, rightArray);
};

(() => {
  console.log(mergeSort([2, 8, 5, 3, 9, 4, 1, 7]));
})();
