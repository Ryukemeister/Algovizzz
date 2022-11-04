/*
// Classic quick sort algorithm
// code from codevolution

function QuickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  let swaps = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
      swaps.push([i - 1, i]);
    } else {
      right.push(arr[i]);
      swaps.push([i, i + 1]);
      // left.push([i, i + 1]);
    }
  }

  return [...QuickSort(left), pivot, ...QuickSort(right)];
  // return swaps;
}
*/

// This approach is from the coding train channel
// Swaps array records all array swaps
let swaps = [];

function quickSort(arr, start, end) {
  // Condition to break out of the recurssion
  if (start >= end) {
    return;
  }

  // Gets the position of the pivot index
  let index = partition(swaps, arr, start, end);

  // Recursively applying quickSort on left and right part
  quickSort(arr, start, index - 1);
  quickSort(arr, index + 1, end);

  return swaps;
}

// Partition function gives out the current position of the pivot index
function partition(swaps, arr, start, end) {
  let pivotValue = arr[end];
  let pivotIndex = start;

  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, pivotIndex);
      swaps.push([i, pivotIndex]);
      pivotIndex++;
    }
  }
  swap(arr, pivotIndex, end);
  swaps.push([pivotIndex, end]);

  return pivotIndex;
}

// Swap function swaps two given variables
function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

export default quickSort;
