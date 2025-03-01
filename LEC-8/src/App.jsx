import React, { useState } from "react";

const App = () => {
  const [color, setColor] = useState("green");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 rounded-3xl shadow-lg bg-white px-3 py-2">
            
            <button
              onClick={() => setColor("red")}
              className="w-24 h-10 outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>

            <button
              onClick={() => setColor("green")}
              className="w-24 h-10 outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>

          </div>
        </div>
      </div>
    </>
  );
};

export default App;
