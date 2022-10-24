function quickSort(arr, start, end) {
  // Moves array record every bar swap
  let moves = [];

  // Condition to break out of the recurssion

  if (start >= end) {
    return;
  }

  // Gets the position of the pivot index
  const index = partition(moves, arr, start, end);

  quickSort(arr, start, index - 1);
  quickSort(arr, index + 1, end);

  return moves;
}

function partition(moves, arr, start, end) {
  let pivotValue = arr[end];
  let pivotIndex = start;

  for (let i = start; i < end; i++) {
    /*
    if (i !== end) {
      moves.push([i, end]);
    }
    */

    if (arr[i] < pivotValue) {
      swap(arr, i, pivotIndex);
      // moves.push([i, pivotIndex]);
      moves.push([i, pivotIndex]);
      pivotIndex++;
    }
  }
  swap(arr, pivotIndex, end);
  moves.push([pivotIndex, end]);
  // moves.push([end, pivotIndex]);

  return pivotIndex;
}

function swap(arr, a, b) {
  // await sleep(40);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

/*
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function QuickSort(arr, start, end) {
  // console.log(arr, "Start index:", start, "End index:", end);
  let swaps = [];

  if (start >= end) {
    return arr;
  }

  let [index, change] = partition(swaps, arr, start, end);

  QuickSort(arr, start, index - 1);
  QuickSort(arr, index + 1, end);

  return change;
}

function partition(swaps, arr, start, end) {
  let pivotIndex = start;
  let pivotValue = arr[end];

  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      // arrayToBeFilled.push([arr]);
      swap(arr, i, pivotIndex);
      swaps.push([i, pivotIndex]);
      pivotIndex++;
    }
  }
  swap(arr, pivotIndex, end);
  // swaps.push([pivotIndex, end]);
  // swaps.push([end, pivotIndex]);

  return [pivotIndex, swaps];
  // return [pivotIndex, swaps];
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
*/

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

export default quickSort;
