import "./App.css";
import React, { useState } from "react";
import { matchString } from "./utils";

function App() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [ans, setAns] = useState([]);

  const handleInput = (e) => {
    setInput(e);
  };

  const handleOutput = (e) => {
    setOutput(e);
  };

  const handleCheck = () => {
    setAns(matchString(input, output));
  };

  return (
    <>
      <div className="App">
        <div>
          <p>Result</p>
          <textarea onChange={(e) => handleInput(e.target.value)} />
        </div>
        <div>
          <p>Wallet</p>
          <textarea onChange={(e) => handleOutput(e.target.value)} />
        </div>
      </div>

      <button onClick={handleCheck}>Check</button>
      <div>
        {ans.map((e, i) => (
          <p key={i}>{e}</p>
        ))}
      </div>
    </>
  );
}

export default App;
