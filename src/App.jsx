import React, { useContext, useEffect, useState } from "react";
import BubbleSort from "./SortingAlgorithms/BubbleSort";
import InsertionSort from "./SortingAlgorithms/InsertionSort";
import Mergesort from "./SortingAlgorithms/MergeSort";
import quickSort from "./SortingAlgorithms/QuickSort";
import selectionSort from "./SortingAlgorithms/SelectionSort";
import heapSort from "./SortingAlgorithms/HeapSort";
import SortingBars from "./components/SortingBars";
// Soring algorithms to be covered are as follows
// "Bubble sort", "heap sort", "insertion sort", "merge sort", "quick sort", "selection sort"

function App() {
  const [numbersArray, setNumbersArray] = useState([]);
  const [indices, setIndices] = useState([]);

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) * min);
  }

  function getRandomArray() {
    let array = [];

    for (let i = 0; i < 10; i++) {
      array.push(getRandomNumber(1, 500));
    }

    //  console.log(array);
    setNumbersArray(array);
  }

  function animateMergeSwaps(swaps) {
    if (swaps.length === 0) {
      setIndices([]);
      return;
    }

    const [indexToBeInserted, valueToBeInserted] = swaps.shift();
    numbersArray[indexToBeInserted] = valueToBeInserted;
    setNumbersArray([...numbersArray]);
    // console.log(indexToBeInserted, valueToBeInserted);

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
    // console.log(numbersArray);

    setTimeout(() => {
      animate(swaps);
    }, 500);
  }

  function getSortingAnimations(algorithm) {
    const numbersArrayCopy = numbersArray.slice();
    let swaps;

    if (algorithm.name === "Mergesort") {
      swaps = Mergesort(numbersArrayCopy, numbersArrayCopy.length);
      animateMergeSwaps(swaps);
    } else {
      if (
        algorithm.name === "BubbleSort" ||
        algorithm.name === "selectionSort" ||
        algorithm.name === "InsertionSort"
      ) {
        swaps = algorithm(numbersArrayCopy);
      } else if (algorithm.name === "heapSort") {
        swaps = algorithm(numbersArrayCopy, numbersArrayCopy.length);
      } else if (algorithm.name === "quickSort") {
        swaps = algorithm(numbersArrayCopy, 0, numbersArrayCopy.length - 1);
      }
      animate(swaps);
    }
  }

  useEffect(() => {
    getRandomArray();
  }, []);

  return (
    <div className="App flex flex-col gap-y-10 lg:gap-y-7 h-[100vh]">
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
            onClick={() => getSortingAnimations(Mergesort)}
            className="py-[6px] px-4 outline-none mr-16 sm:mr-4 lg:mr-0 font-montserrat bg-yellow-500 text-white font-semibold rounded-full shadow-sm hover:bg-yellow-600 hover:shadow-md"
          >
            Merge sort
          </button>
          <button
            onClick={() => getSortingAnimations(BubbleSort)}
            className="py-[6px] px-4 mr-4 mb-2 lg:mb-0 lg:mr-0 outline-none font-montserrat bg-blue-600 text-white font-semibold rounded-full shadow-sm hover:bg-blue-700 hover:shadow-md"
          >
            Bubble sort
          </button>
          <button
            onClick={() => getSortingAnimations(InsertionSort)}
            className="py-[6px] px-4 outline-none mr-14 lg:mr-0 sm:mr-4 font-montserrat bg-green-500 text-white font-semibold rounded-full shadow-sm hover:bg-green-600 hover:shadow-md"
          >
            Insertion sort
          </button>
          <button
            onClick={() => getSortingAnimations(getQuickSort)}
            className="py-[6px] px-4 mb-2 lg:mb-0 outline-none mr-4 lg:mr-0 sm:mr-4 font-montserrat bg-violet-500 text-white font-semibold rounded-full shadow-sm hover:bg-violet-600 hover:shadow-md"
          >
            Quick sort
          </button>
          <button
            onClick={() => getSortingAnimations(selectionSort)}
            className="py-[6px] px-4 outline-none mr-14 sm:mr-4 lg:mr-0 font-montserrat bg-orange-500 text-white font-semibold rounded-full shadow-sm hover:bg-orange-600 hover:shadow-md"
          >
            Selection sort
          </button>
          <button
            onClick={() => getSortingAnimations(heapSort)}
            className="py-[6px] px-4 outline-none font-montserrat bg-stone-100 text-black font-semibold rounded-full shadow-sm hover:bg-stone-200 hover:shadow-md"
          >
            Heap sort
          </button>
        </div>
      </div>
      <SortingBars numbersArray={numbersArray} indices={indices} />
    </div>
  );
}

export default App;
