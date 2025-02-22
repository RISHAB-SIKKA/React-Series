import React, { useState } from 'react'

const App = () => {

  let [counter, setCounter] = useState(15);

  // let counter = 15;

  const add = () => {
    // counter = counter + 1;
    if(counter<20){
      setCounter(counter+1);
    console.log("clicked", counter);
    }
    else console.log("clicked but no increased", counter);
  }

  const remove = () =>{
    if(counter>0){
      setCounter(counter-1);
    console.log("clicked", counter);

    }
    else console.log("clicked but no decreased", counter);
  }

  return (
    <>
      <h1>Chai aur React{counter}</h1>
      <h2>Counter value: {counter}</h2>

      <button 
      onClick={add}
      >Add Value{counter}</button>
      <br/>
      <button
      onClick={remove}
      >Decrease Value{counter}</button>
    </>
  )
}

export default App