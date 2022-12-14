import Mergesort from "../SortingAlgorithms/MergeSort";
import BubbleSort from "../SortingAlgorithms/BubbleSort";
import InsertionSort from "../SortingAlgorithms/InsertionSort";
import quickSort from "../SortingAlgorithms/QuickSort";
import selectionSort from "../SortingAlgorithms/SelectionSort";
import heapSort from "../SortingAlgorithms/HeapSort";

function Navbar({ numbersInfo, indicesInfo, getRandomArray }) {
  const { numbersArray, setNumbersArray } = numbersInfo;
  const { indices, setIndices } = indicesInfo;

  function animateMergeSwaps(swaps) {
    if (swaps.length === 0) {
      setIndices([]);
      return;
    }

    const [indexToBeInserted, valueToBeInserted] = swaps.shift();
    numbersArray[indexToBeInserted] = valueToBeInserted;
    setNumbersArray([...numbersArray]);

    setIndices([indexToBeInserted, indexToBeInserted + 1]);

    setTimeout(() => {
      animateMergeSwaps(swaps);
    }, 500);
  }

  function animate(swaps) {
    if (swaps.length === 0) {
      setIndices([]);
      return;
    }

    const [i, j] = swaps.shift();

    [numbersArray[i], numbersArray[j]] = [numbersArray[j], numbersArray[i]];

    setNumbersArray([...numbersArray]);
    setIndices([i, j]);

    setTimeout(() => {
      animate(swaps);
    }, 500);
  }

  function getSortingAnimations(algorithm, algorithmName) {
    const numbersArrayCopy = numbersArray.slice();
    // swaps variable is for storing the array of elements to be swapped
    let swaps;

    // Based on the name of the algorithm the value of swaps is changed
    // Then the swaps variable is passed as an argument to the animate function
    if (algorithmName === "MergeSort") {
      swaps = algorithm(numbersArrayCopy, numbersArrayCopy.length);
      animateMergeSwaps(swaps);
    } else {
      if (
        algorithmName === "BubbleSort" ||
        algorithmName === "SelectionSort" ||
        algorithmName === "InsertionSort"
      ) {
        swaps = algorithm(numbersArrayCopy);
      } else if (algorithmName === "HeapSort") {
        swaps = algorithm(numbersArrayCopy, numbersArrayCopy.length);
      } else if (algorithmName === "QuickSort") {
        swaps = algorithm(numbersArrayCopy, 0, numbersArrayCopy.length - 1);
      }

      animate(swaps);
    }
  }

  return (
    <section>
      <div className="flex flex-col lg:flex-row lg:justify-between py-4 bg-gradient-to-r from-red-500 via-red-400 to-red-300 shadow-md">
        <div>
          <h1 className="font-poppins mb-2 lg:mb-0 pl-5 font-medium text-white tracking-wide text-2xl">
            Algovizzz
          </h1>
        </div>
        <div className="lg:flex lg:gap-x-4 lg:mr-4 mx-4">
          <button
            onClick={getRandomArray}
            className="py-[7px] px-4 mr-4 mb-2 lg:mb-0 lg:mr-0 outline-none font-montserrat bg-pink-500 text-white font-semibold rounded-full shadow-sm hover:bg-pink-600 hover:shadow-md"
          >
            Generate new array
          </button>
          <button
            onClick={() => getSortingAnimations(Mergesort, "MergeSort")}
            className="py-[6px] px-4 outline-none mr-16 sm:mr-4 lg:mr-0 font-montserrat bg-yellow-500 text-white font-semibold rounded-full shadow-sm hover:bg-yellow-600 hover:shadow-md"
          >
            Merge sort
          </button>
          <button
            onClick={() => getSortingAnimations(BubbleSort, "BubbleSort")}
            className="py-[6px] px-4 mr-4 mb-2 lg:mb-0 lg:mr-0 outline-none font-montserrat bg-blue-600 text-white font-semibold rounded-full shadow-sm hover:bg-blue-700 hover:shadow-md"
          >
            Bubble sort
          </button>
          <button
            onClick={() => getSortingAnimations(InsertionSort, "InsertionSort")}
            className="py-[6px] px-4 outline-none mr-14 lg:mr-0 sm:mr-4 font-montserrat bg-green-500 text-white font-semibold rounded-full shadow-sm hover:bg-green-600 hover:shadow-md"
          >
            Insertion sort
          </button>
          <button
            onClick={() => getSortingAnimations(quickSort, "QuickSort")}
            className="py-[6px] px-4 mb-2 lg:mb-0 outline-none mr-4 lg:mr-0 sm:mr-4 font-montserrat bg-violet-500 text-white font-semibold rounded-full shadow-sm hover:bg-violet-600 hover:shadow-md"
          >
            Quick sort
          </button>
          <button
            onClick={() => getSortingAnimations(selectionSort, "SelectionSort")}
            className="py-[6px] px-4 outline-none mr-14 sm:mr-4 lg:mr-0 font-montserrat bg-orange-500 text-white font-semibold rounded-full shadow-sm hover:bg-orange-600 hover:shadow-md"
          >
            Selection sort
          </button>
          <button
            onClick={() => getSortingAnimations(heapSort, "HeapSort")}
            className="py-[6px] px-4 outline-none font-montserrat bg-stone-100 text-black font-semibold rounded-full shadow-sm hover:bg-stone-200 hover:shadow-md"
          >
            Heap sort
          </button>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
