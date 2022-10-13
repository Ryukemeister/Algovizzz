function BubbleSort(arr) {
  let swappped;
  do {
    swappped = false;

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swappped = true;
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  } while (swappped);
}

export default BubbleSort;
