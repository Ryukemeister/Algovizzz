function BubbleSort(arr) {
  let swapped;
  let swaps = [];
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swapped = true;
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        // console.log(i, i + 1);
        swaps.push([i, i + 1]);
      }
    }
  } while (swapped);

  return swaps;
}

export default BubbleSort;
