import React, { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(15);

  const add = () => {
    setCounter((prevCounter) => {
      const newCounter = prevCounter + 2; // Since we're incrementing twice
      if (newCounter < 20) {
        console.log("Incremented", newCounter);
        return newCounter;
      } else {
        console.log("Threshold Reached");
        return prevCounter; // Prevent further increment
      }
    });
  };

  const remove = () => {
    setCounter((prevCounter) => {
      if (prevCounter > 0) {
        console.log("Decremented", prevCounter - 1);
        return prevCounter - 1;
      } else {
        console.log("Threshold Reached");
        return prevCounter;
      }
    });
  };

  return (
    <>
      <div>Counter: {counter}</div>

      <button onClick={add}>Add</button>
      <button onClick={remove}>Reduce</button>
    </>
  );
};

export default App;
