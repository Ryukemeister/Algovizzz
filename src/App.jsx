import React, { useEffect, useState } from "react";
import BubbleSort from "./SortingAlgorithms/BubbleSort";
import MergeSort from "./SortingAlgorithms/MergeSort";

// 'Bubble sort', 'selection sort', 'insertion sort', 'quick sort', 'merge sort', 'heap sort'
//  "Bubble sort", "heap sort", "insertion sort", "merge sort", "quick sort", "selection sort"

function App() {
  const [numbersArray, setNumbersArray] = useState([]);

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) * min);
  }

  function getRandomArray() {
    let array = [];

    for (let i = 0; i < 10; i++) {
      array.push(getRandomNumber(1, 500));
    }

    console.log(array);
    setNumbersArray(array);
  }

  function getSortedArray() {
    let newArrayy = numbersArray.slice();

    const arr = MergeSort(newArrayy);
    //  setNumbersArray(arr);
    console.log(arr);
  }

  function sortttt() {
    const newArrayy = numbersArray.slice();
    const swaps = BubbleSort(newArrayy);
    const first = swaps.shift();

    // console.log(newArrayy, swaps, first);

    animate(swaps, newArray);
    // setNumbersArray(newArrayy);
  }

  function animate(swaps) {
    let newArrayy = numbersArray.slice();

    if (swaps.length === 0) {
      return;
    }

    const [i, j] = swaps.shift();
    [newArrayy[i], newArrayy[j]] = [newArrayy[j], newArrayy[i]];

    // console.log(newArray);
    setNumbersArray(newArrayy);

    setTimeout(function () {
      animate(swaps, newArrayy);
      console.log("Changing");
    }, 100);

    // console.log(swaps, newArrayy);

    /*
    const [i, j] = swaps.shift();
    [newArrayy[i], newArrayy[j]] = [newArrayy[j], newArrayy[i]];
    console.log(i, j);
    console.log(newArrayy[i], newArrayy[j]);
    console.log(tempArr);
    setNumbersArray(tempArr);


    setTimeout(function () {
      animate(swaps, newArrayy);
    }, 50);
    */
  }

  const newArray = numbersArray.map((num, i) => {
    return (
      <div
        className="bar bg-red-500 w-5"
        key={i}
        style={{
          height: `${num}px`,
        }}
      ></div>
    );
  });

  useEffect(() => {
    sortttt();
  }, []);

  useEffect(() => {
    getRandomArray();
  }, []);

  return (
    <div className="App">
      <div className="flex justify-between py-4 mb-5 bg-gradient-to-r from-red-500 via-red-400 to-red-300 shadow-md">
        <div>
          <h1 className="font-poppins pl-5 font-medium text-white tracking-wide text-2xl">
            Algovizzz
          </h1>
        </div>
        <div>
          <button
            onClick={getRandomArray}
            className="py-[7px] px-4 font-montserrat mx-4 bg-pink-500 text-white font-semibold rounded-full shadow-sm hover:bg-pink-600"
          >
            Generate new array
          </button>
          <button
            onClick={getSortedArray}
            className="py-[6px] px-4 font-montserrat mx-4 bg-yellow-500 text-white font-semibold rounded-full shadow-sm hover:bg-yellow-600"
          >
            Merge sort
          </button>
          <button
            onClick={sortttt}
            className="py-[6px] px-4 font-montserrat mx-4 bg-blue-500 text-white font-semibold rounded-full shadow-sm hover:bg-blue-600"
          >
            Bubble sort
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
