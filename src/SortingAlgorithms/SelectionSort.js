function selectionSort(arr) {
  let swaps = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;

    // This for loops runs through the whole array
    // and determines the min element in the array
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // Swaps the min element withe the first element in the unsorted part
    const temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;

    swaps.push([i, minIndex]);
  }

  return swaps;
}

export default selectionSort;
