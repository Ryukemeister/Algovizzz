import React, { useEffect, useState } from "react";
import MergeSort from "./components/MergeSort";

// 'Bubble sort', 'selection sort', 'insertion sort', 'quick sort', 'merge sort', 'heap sort'
//  "Bubble sort", "heap sort", "insertion sort", "merge sort", "quick sort", "selection sort"

function App() {
  const [numbersArray, setNumbersArray] = useState([]);

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) * min);
  }

  function getRandomArray() {
    let array = [];

    for (let i = 0; i < 100; i++) {
      array.push(getRandomNumber(1, 500));
    }
    setNumbersArray(array);
  }

  function getMergeSortedArray() {
    const num = MergeSort(numbersArray);
    console.log(num);
  }

  // console.log(numbersArray.sort((a, b) => b - a));

  const newArray = numbersArray.map((num, i) => {
    return (
      <div
        className="bg-red-500 w-5"
        key={i}
        style={{
          height: `${num}px`,
        }}
      ></div>
    );
  });

  console.log(numbersArray);

  useEffect(() => {
    getRandomArray();
  }, []);

  return (
    <div className="App">
      <button
        onClick={getRandomArray}
        className="py-2 px-4 font-montserrat my-5 mx-4 bg-orange-500 text-white font-semibold rounded-full shadow-md hover:bg-orange-600"
      >
        Generate new array
      </button>
      <button
        onClick={getMergeSortedArray}
        className="py-2 px-4 font-montserrat my-5 mx-4 bg-yellow-500 text-white font-semibold rounded-full shadow-md hover:bg-yellow-600"
      >
        Merge sort
      </button>
      <section className="flex gap-[2px] mb-5 justify-center mx-5 rotate-180">
        {newArray}
      </section>
    </div>
  );
}

export default App;
