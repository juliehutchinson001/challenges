/*
  Find two numbers that when added, they equal a target

  input:
    [-1, 0, 4, 1, 2, -1, -4],
    target = 0

  output:
    [
      [-1, 1],
      [4, -4]
    ]
*/

/**
 * @description finds two numbers in an unsorted array that add up to the target | Time: O(n); Space: O(n).
 * @param {Array[number]} arr | The unsorted array.
 * @param {Number} target | the total of two added numbers from the array.
 */
const twoSumWithCaching = (arr, target) => {
  const cache = {};
  const result = [];

  for (let idx = 0; idx < arr.length; idx++) {
    const compliment = target - arr[idx];

    // if the key is already in the cache object
    if (cache[compliment] !== undefined) {
      result.push([compliment, arr[idx]]);
    } else {
      cache[arr[idx]] = idx;
    }
  }
  return result;
};

const unsortedArray = [-1, 0, 4, 1, 2, -1, -4];

console.log(twoSumWithCaching(unsortedArray, 0));
// console.log(twoSumWithCaching([100, 200, 300, 400, 800, 0], 600));

/**
 * Helper function that retrieves a sorted array | insertion sort: O(n^2)operations - O(f+n+t)space
 * @param {Array[Number]} theArr | an unsorted array
 * @returns {Array[Number]} theArr | same array but sorted.
 */
const insertionSort = arr => {
  let firstPt = 0;
  let nextPt = 1;
  let temp;

  while (nextPt < arr.length) {
    if (arr[firstPt] <= arr[nextPt]) {
      firstPt += 1;
      nextPt += 1;
    } else {
      temp = arr[nextPt];
      for (let ctr = firstPt; arr[ctr] > temp; ctr--) {
        arr[ctr + 1] = arr[ctr];
        arr[ctr] = temp;
      }
    }
  }
  return arr;
};

// console.log(insertionSort(unsortedArray));

/**
 * @description finds two numbers in a sorted array that add up to the target | Time: O(2n); Space: O(1).
 * @param {Array[number]} arr | The sorted array.
 * @param {Number} target | the total adition of two numbers from the array.
 */
const twoSumWithSortingArray = (arr, target) => {
  //sort the array with sorting algorithm (expensive performance)
  const sortedArray = insertionSort(arr);
  const resultArray = [];
  let firstPtr = 0;
  let laterPtr = sortedArray.length - 1;

  if (arr.length < 2) return resultArray;

  if (arr.length === 2) {
    let totalSum = arr.reduce((accum, currVal) => accum + currVal, 0);

    return totalSum === target ? resultArray : sortedArray;
  }

  //loop: add two pointers and compare with the target;
  while (firstPtr < laterPtr) {
    const totalSum = sortedArray[firstPtr] + sortedArray[laterPtr];

    if (totalSum === target) {
      resultArray.push([sortedArray[firstPtr], sortedArray[laterPtr]]);
      laterPtr -= 1;
      firstPtr += 1;
    } else if (totalSum > target) {
      laterPtr -= 1;
    } else {
      firstPtr += 1;
    }
  }
  return resultArray;
};

console.log(twoSumWithSortingArray(unsortedArray, 0));
