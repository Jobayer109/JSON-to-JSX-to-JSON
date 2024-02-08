import { useState } from "react";
import "./App.css";
/*
TODO: Handle user input fields    -----> Done
TODO: Handle operations           -----> Done
TODO: Handle a list of histories  ----->
TODO: Render history list         ----->
TODO: Restore the history         ----->
*/
const inputObj = {
  a: 0,
  b: 0,
};

function App() {
  const [inputState, setInputState] = useState(inputObj);
  const [result, setResult] = useState(0);

  const handleChange = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  const handleArithmeticOps = (operator) => {
    // handle by creating function on the fly
    const opsFunc = new Function(
      "operator",
      `return ${inputState.a} ${operator} ${inputState.b}`
    );
    setResult(opsFunc(operator));

    // handle using eval()
    // const res = eval(`${inputState.a} ${operator} ${inputState.b}`);
    // setResult(res);
    // console.log(res);
  };

  const handleReset = () => {
    setInputState(inputObj);
    setResult(0);
  };

  return (
    <div>
      <h2>JSON to JSX to JSON</h2>
      <div>
        <h3 style={{ margin: "1rem" }}>Result: {result}</h3>
        <div className="input__div">
          <input
            type="number"
            name="a"
            value={inputState.a}
            onChange={handleChange}
          />{" "}
          <br />
          <input
            type="number"
            name="b"
            value={inputState.b}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="btn-group">
        <button onClick={() => handleArithmeticOps("+")}>+</button>
        <button onClick={() => handleArithmeticOps("-")}>-</button>
        <button onClick={() => handleArithmeticOps("*")}>*</button>
        <button onClick={() => handleArithmeticOps("/")}>/</button> <br />
        <button onClick={handleReset} className="reset">
          Reset
        </button>
      </div>
      <div className="hr__line"></div>
      <div style={{ marginTop: "1rem" }}>
        <h3>History</h3>
        <p>
          <small>No history here</small>
        </p>
      </div>
    </div>
  );
}
export default App;
