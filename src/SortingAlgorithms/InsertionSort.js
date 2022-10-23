function InsertionSort(arr) {
  let swaps = [];

  for (let i = 0; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let indexOfSortedArray = i - 1;

    while (
      indexOfSortedArray >= 0 &&
      arr[indexOfSortedArray] > numberToInsert
    ) {
      arr[indexOfSortedArray + 1] = arr[indexOfSortedArray];
      swaps.push([indexOfSortedArray, indexOfSortedArray + 1]);
      indexOfSortedArray = indexOfSortedArray - 1;
    }

    arr[indexOfSortedArray + 1] = numberToInsert;
  }

  return swaps;
}

export default InsertionSort;
