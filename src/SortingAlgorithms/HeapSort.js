const maxHeapify = (arr, n, i, swaps) => {
  let largest = i;
  let l = 2 * i + 1; //left child index
  let r = 2 * i + 2; //right child index

  //If left child is smaller than root
  if (l < n && arr[l] > arr[largest]) {
    largest = l;
  }

  // If right child is smaller than smallest so far
  if (r < n && arr[r] > arr[largest]) {
    largest = r;
  }

  // If smallest is not root
  if (largest != i) {
    let temp = arr[i];
    arr[i] = arr[largest];
    arr[largest] = temp;
    swaps.push([i, largest]);

    // Recursively heapify the affected sub-tree
    maxHeapify(arr, n, largest, swaps);
  }
};

// main function to do heap sort
function heapSort(arr, n) {
  // Swaps variable records every swap that occurs in the maxHeapify function
  let swaps = [];

  // Build heap (rearrange array)
  for (let i = parseInt(n / 2 - 1); i >= 0; i--) {
    maxHeapify(arr, n, i, swaps);
  }

  // One by one extract an element from heap
  for (let i = n - 1; i >= 0; i--) {
    // Move current root to end

    let temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    swaps.push([0, i]);

    // call max heapify on the reduced heap
    maxHeapify(arr, i, 0, swaps);
  }

  return swaps;
}

export default heapSort;
