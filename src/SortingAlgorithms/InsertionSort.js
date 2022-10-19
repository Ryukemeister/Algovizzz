function InsertionSort(arr) {
  let swaps = [];

  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      swaps.push([j, j + 1]);
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
  return swaps;
}

export default InsertionSort;
