function BubbleSort(arr) {
  let swapped;
  const swaps = [];

  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swapped = true;
        swaps.push([i, i + 1]);
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  } while (swapped);

  return swaps;
}

export default BubbleSort;
