import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setcounter] = useState(0);
  //let counter = 5;
  const addvalue = () => {
    console.log("clicked ", counter);
    if (counter < 20) {
      setcounter(counter + 1);
    }
  };
  const removevalue = () => {
    if (counter > 0) {
      console.log("clicked", counter);
      setcounter(counter - 1);
    }
  };
  return (
    <>
      <h1>I AM THE BOSS.</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addvalue}>Add Value {counter} </button>
      <br />
      <button onClick={removevalue}>Remove Value {counter} </button>
    </>
  );
}

export default App;
