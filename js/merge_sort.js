/**
 * `mergeFunction` takes care of sorting the shorter vertions of the original arr
 * @param {Int[]} `leftArr` smaller partition of the left side of an array
 * @param {Int[]} `rightArr` smaller partition of the right side of an array
 */
const mergeFunction = (leftArr, rightArr) => {
  // [2], [8]
  const tempArr = [];
  let lIdx = 0;
  let rIdx = 0;

  while (lIdx < leftArr.length && rIdx < rightArr.length) {
    if (leftArr[lIdx] > rightArr[rIdx]) {
      tempArr.push(rightArr[rIdx]);
      rIdx += 1;
    } else {
      tempArr.push(leftArr[lIdx]);
      lIdx += 1;
    }
  }

  while (lIdx < leftArr.length) {
    tempArr.push(leftArr[lIdx]);
    lIdx += 1;
  }

  while (rIdx < rightArr.length) {
    tempArr.push(rightArr[rIdx]);
    rIdx += 1;
  }

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
  // console.log(mergeSort([8, 10, 12, 11, 1, 7, 3]));
})();

/**
 * leftArray = [2, 8]
 * leftArray = [2] // return
 * rightArray = [8]
 * mergeFunction = [2, 8] // return
 * rightArray = [5, 3]
 * leftArray = [5]
 * rightArray = [3]
 * mergeFunction = [5, 3] // return
 * mergeFunction = [2, 8, 3, 5] // return
 *
 */
