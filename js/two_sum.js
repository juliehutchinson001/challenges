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
 * Helper function that retrieves the key of a passed value in an object
 * @param {Obj{}} obj the cache object
 * @param {Int} val the value in the object
 */
const getKeyByValue = (obj, val) =>
  Object.keys(obj).find(key => obj[key] === val);

/**
 * @description finds two numbers in an unsorted array that add up to the target | Time: O(n); Space: O(n).
 * @param {Array[number]} arr | The unsorted array.
 * @param {*} target | the total of two added numbers from the array.
 */
const twoSumWithCaching = (arr, target) => {
  const cache = {};
  const result = [];

  for (let idx = 0; idx < arr.length; idx++) {
    const NOT_FOUND_INDEX = -1;
    const compliment = target - arr[idx];
    const keyOfCompliment = parseInt(getKeyByValue(cache, compliment), 10);

    if (keyOfCompliment > NOT_FOUND_INDEX) {
      result.push([arr[keyOfCompliment], arr[idx]]);
    } else {
      cache[idx] = arr[idx];
    }
  }

  return result;
};

// console.log(twoSumWithUnsortedArray([-1, 0, 4, 1, 2, -1, -4], 0));

/**
 * @description finds two numbers in a sorted array that add up to the target | Time: O(2n); Space: O(1).
 * @param {Array[number]} arr | The sorted array.
 * @param {*} target | the total of two added numbers from the array.
 */
const twoSumWithSortingArray = (arr, target) => {};
