/*
// Original mergeSort
// from codevolution

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

/*
// From stack overflow

function mergeSort(array, leftIndex, rightIndex, resultsArray) {
  let length = rightIndex - leftIndex;

  // console.log(array, leftIndex, rightIndex);
  // console.log("Length:", length);

  if (length < 2) {
    return array;
  }
  let mid = leftIndex + Math.floor(length / 2);
  // console.log("Mid:", mid);

  mergeSort(array, leftIndex, mid, resultsArray);
  mergeSort(array, mid, rightIndex, resultsArray);
  //  delay(1000 * Math.sqrt(rightIndex - leftIndex));
  // draw(array);
  merge(array, resultsArray, leftIndex, mid, rightIndex);

  return array;
}

function merge(array, resultsArr, leftIndex, mid, rightIndex) {
  var result = [];

  var l = leftIndex,
    r = mid;
  while (l < mid && r < rightIndex) {
    if (array[l] < array[r]) {
      result.push(array[l++]);
    } else {
      result.push(array[r++]);
    }
  }
  result = result
    .concat(array.slice(l, mid))
    .concat(array.slice(r, rightIndex));

  // resultsArr.push([result]);
  // resultsArr.push([array]);
  console.log("Results:", result);
  console.log("OG array:", array);

  for (let i = 0; i < rightIndex - leftIndex; i++) {
    array[leftIndex + i] = result[i];
  }
}
*/

// Merge Sorting using Clements method

function mergeSort(array) {
  let animations = [];

  if (array.length <= 1) return array;

  // Copy of the orignal array
  // so that we can keep track of all the changes in the OG array
  const auxiliaryArray = array.slice();

  // console.log(array);
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);

  return animations;
}

function mergeSortHelper(
  mainArray,
  startIndex,
  endIndex,
  auxiliaryArray,
  animations
) {
  if (startIndex === endIndex) return;

  const middleIndex = Math.floor((startIndex + endIndex) / 2);

  mergeSortHelper(
    auxiliaryArray,
    startIndex,
    middleIndex,
    mainArray,
    animations
  );
  mergeSortHelper(
    auxiliaryArray,
    middleIndex + 1,
    endIndex,
    mainArray,
    animations
  );

  doMerge(
    mainArray,
    startIndex,
    middleIndex,
    endIndex,
    auxiliaryArray,
    animations
  );
}

function doMerge(
  mainArray,
  startIndex,
  middleIndex,
  endIndex,
  auxiliaryArray,
  animations
) {
  let k = startIndex;
  let i = startIndex;
  let j = middleIndex + 1;

  console.log(k, i, j);

  while (i <= middleIndex && j <= endIndex) {
    const animation = {};
    animation.comparison = [i, j];

    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      //animation.swap = [k, i];
      animation.swap = [k, i];
      swap(mainArray, k, i);
      // swap(mainArray, k, i);
      // swap(auxiliaryArray, k, i);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      // animation.swap = [k, j];
      animation.swap = [i, j];
      // swap(auxiliaryArray, k, j);
      swap(mainArray, i, j);
      mainArray[k++] = auxiliaryArray[j++];
    }
    animations.push(animation);
  }

  while (i <= middleIndex) {
    animations.push({
      comparison: [i, i],
      swap: [k, i],
    });
    swap(mainArray, k, i);
    // swap(auxiliaryArray, k, i);

    mainArray[k++] = auxiliaryArray[i++];
  }

  while (j <= endIndex) {
    animations.push({
      comparison: [j, j],
      swap: [k, j],
    });
    swap(mainArray, k, j);
    // swap(auxiliaryArray, k, j);

    mainArray[k++] = auxiliaryArray[j++];
  }
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

export default mergeSort;
