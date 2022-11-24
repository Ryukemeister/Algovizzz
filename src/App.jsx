import React, { useEffect, useState } from "react";
import SortingBars from "./components/SortingBars";
import Navbar from "./components/Navbar";

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

    setNumbersArray(array);
  }

  useEffect(() => {
    getRandomArray();
  }, []);

  return (
    <div className="App flex flex-col gap-y-10 lg:gap-y-7 h-[100vh]">
      <Navbar
        getRandomArray={getRandomArray}
        numbersInfo={{
          numbersArray,
          setNumbersArray,
        }}
        indicesInfo={{ indices, setIndices }}
      />
      <SortingBars numbersArray={numbersArray} indices={indices} />
    </div>
  );
}

export default App;
