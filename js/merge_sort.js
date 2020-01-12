/**
 * `mergeFunction` takes care of sorting the shorter vertions of the original arr
 * @param {Int[]} `leftArr` smaller partition of the left side of an array
 * @param {Int[]} `rightArr` smaller partition of the right side of an array
 */
const mergeFunction = (leftArr, rightArr) => {
  // [2,8], [5,3]
  const tempArr = [];
  let lIdx = 0;
  let rIdx = 0;

  while (lIdx < leftArr.length && rIdx < rightArr.length) {
    // 2, 2
    if (leftArr[lIdx] > rightArr[rIdx]) {
      // 2 > 5 === false
      tempArr.push(rightArr[rIdx]);
      rIdx += 1;
      console.log(`right array has changed: ${rightArr}`);
    } else {
      tempArr.push(left.Arr[0]);
      lIdx += 1;
      console.log(`left array has changed: ${leftArr}`);
    }
  }

  while (lIdx < leftArr.length) {
    tempArr.push(left.Arr[0]);
    lIdx += 1;
    console.log(`left array has changed: ${leftArr}\n`);
  }

  while (rIdx < rightArr.length) {
    tempArr.push(right.Arr[0]);
    rIdx += 1;
    console.log(`right array has changed: ${rightArr}\n`);
  }

  console.log(`\n\ntempArr after sorted: ${tempArr}\n\n`);
  return tempArr;
};

/**
 * `mergeSort` calls itself recursively to partition an arr in smaller parts
 * @param {Int[]int} `arr` The original array
 */
const mergeSort = arr => {
  const lengthOfArr = arr.length;

  if (lengthOfArr < 2) return arr;
  console.log(`Original array: ${arr}\n\n`);

  const leftArray = mergeSort(arr.slice(0, Math.round(lengthOfArr / 2)));
  console.log(`left partitioned arr: ${leftArray} \n`);
  const rightArray = mergeSort(arr.slice(Math.round(lengthOfArr / 2)));
  console.log(`right partitioned arr: ${rightArray}\n\n`);

  return mergeFunction(leftArray, rightArray); //[2, 8], [5, 3]
};

(() => {
  console.log(mergeSort([2, 8, 5, 3]));
  // console.log(mergeSort([2, 8, 5, 3, 9, 4, 1, 7]));
})();
