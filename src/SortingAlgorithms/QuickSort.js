function QuickSort(arr, start, end) {
  let swaps = [];

  if (start >= end) {
    return;
  }

  let index = partition(arr, start, end, swaps);

  QuickSort(arr, start, index - 1);
  QuickSort(arr, index + 1, end);

  // return QuickSort(arr, start, index - 1), QuickSort(arr, index + 1, end);
}

function partition(arr, start, end, swaps) {
  let pivotIndex = start;
  let pivotValue = arr[end];

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

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

/*
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

export default QuickSort;
