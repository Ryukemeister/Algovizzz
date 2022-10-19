import React, { useEffect, useState } from "react";
import BubbleSort from "./SortingAlgorithms/BubbleSort";
import InsertionSort from "./SortingAlgorithms/InsertionSort";
import MergeSort from "./SortingAlgorithms/MergeSort";

// 'Bubble sort', 'selection sort', 'insertion sort', 'quick sort', 'merge sort', 'heap sort'
//  "Bubble sort", "heap sort", "insertion sort", "merge sort", "quick sort", "selection sort"

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

  function getMergeSort() {
    let newArrayy = numbersArray.slice();

    const arr = MergeSort(newArrayy);
    // setNumbersArray(arr);
    console.log(arr);
  }

  function getBubbleSort() {
    const newArrayy = [...numbersArray];
    const swaps = BubbleSort(newArrayy);

    animate(swaps);
  }

  function getInsertionSort() {
    const newArrayyyyy = numbersArray.slice();
    const swaps = InsertionSort(newArrayyyyy);

    // console.log(newArrayyyyy);
    // console.log(swaps);

    animate(swaps);
  }

  function animate(swaps) {
    if (swaps.length === 0) {
      // console.log(numbersArray);
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

  const newArray = numbersArray.map((el, i) => {
    return (
      <div
        className="bar w-10 lg:w-24"
        key={i}
        style={{
          height: `${el}px`,
          backgroundColor: `${
            indices && indices.includes(i) ? "rgb(34 197 94)" : "rgb(239 68 68)"
          }`,
        }}
      ></div>
    );
  });

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
            className="py-[7px] px-4 mr-4 mb-2 lg:mb-0 lg:mr-0 outline-none font-montserrat bg-pink-500 text-white font-semibold rounded-full shadow-sm hover:bg-pink-600"
          >
            Generate new array
          </button>
          <button
            onClick={getMergeSort}
            className="py-[6px] px-4 outline-none font-montserrat bg-yellow-500 text-white font-semibold rounded-full shadow-sm hover:bg-yellow-600"
          >
            Merge sort
          </button>
          <button
            onClick={getBubbleSort}
            className="py-[6px] px-4 mr-4 lg:mr-0 outline-none font-montserrat bg-blue-500 text-white font-semibold rounded-full shadow-sm hover:bg-blue-600"
          >
            Bubble sort
          </button>
          <button
            onClick={getInsertionSort}
            className="py-[6px] px-4 outline-none font-montserrat bg-violet-500 text-white font-semibold rounded-full shadow-sm hover:bg-violet-600"
          >
            Insertion sort
          </button>
        </div>
      </div>
      <section className="flex gap-[2px] mb-5 justify-center mx-5 items-end">
        {newArray}
      </section>
    </div>
  );
}

export default App;
