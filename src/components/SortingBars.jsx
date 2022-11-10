function SortingBars({ numbersArray, indices }) {
  const generateNewArray = numbersArray.map((el, i) => {
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

  return (
    <section className="flex gap-[2px] mb-5 justify-center mx-5 items-end">
      {generateNewArray}
    </section>
  );
}

export default SortingBars;
