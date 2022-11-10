/*
// Original mergeSort solution from codevolution

function MergeSort(arr) {
  let swaps = [];

  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  return merge(swaps, MergeSort(leftArr), MergeSort(rightArr));
}

function merge(swaps, leftArr, rightArr) {
  const sortedArray = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArray.push(leftArr.shift());
    } else {
      sortedArray.push(rightArr.shift());
    }
  }

  return [...sortedArray, ...leftArr, ...rightArr];
}
*/

function Mergesort(array, length) {
  // Moves variable captures the index and the
  // value that is to be inserted at that index
  let swaps = [];

  divide(array, swaps, 0, length - 1);

  return swaps;
}

function divide(array, swaps, start, end) {
  // Condition to break out of recursion
  if (start < end) {
    let mid = Math.floor((end + start) / 2);

    // Recursively subdividing the array into smaller arrrays
    // until the array length becomes equal to 1
    divide(array, swaps, start, mid);
    divide(array, swaps, mid + 1, end);

    // Repeteadly merging the subdivided arrays to get a single
    // sorted array
    merge(array, swaps, start, mid, end);
  }
}

function merge(array, swaps, start, mid, end) {
  let sortedArray = [];

  // i is start of the left part of the mid element
  // j is the start of the right part of the mid element
  let i = start,
    j = mid + 1;
  while (i <= mid && j <= end) {
    if (array[i] <= array[j]) sortedArray.push(array[i++]);
    else sortedArray.push(array[j++]);
  }
  while (i <= mid) {
    sortedArray.push(array[i++]);
  }
  while (j <= end) {
    sortedArray.push(array[j++]);
  }

  for (let i = start; i <= end; ++i) {
    array[i] = sortedArray[i - start];
    swaps.push([i, array[i]]);
  }
}

export default Mergesort;
