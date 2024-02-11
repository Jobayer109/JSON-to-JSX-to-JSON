import { useState } from "react";
import shortid from "shortid";
import "./App.css";
/*
TODO: Handle user input fields    -----> Done
TODO: Handle operations           -----> Done
TODO: Handle a list of histories  ----->
TODO: Render history list         ----->
TODO: Restore the history         ----->
*/
const inputObj = {
  a: 20,
  b: 10,
};

function App() {
  const [inputState, setInputState] = useState({ ...inputObj });
  const [result, setResult] = useState(0);
  const [histories, setHistories] = useState([]);

  const handleChange = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: parseInt(e.target.value),
    });
  };

  const handleArithmeticOps = (operator) => {
    if (!inputState.a || !inputState.b) {
      alert("Insert a valid number");
      return;
    }

    // handle by creating function on the fly
    const opsFunc = new Function(
      "operator",
      `return ${inputState.a} ${operator} ${inputState.b}`
    );
    const result = opsFunc(operator);
    setResult(result);

    // handle using eval()
    // setResult(eval(`${inputState.a} ${operator} ${inputState.b}`));

    // History item list object.
    const historyList = {
      id: shortid.generate(),
      input: inputState,
      operator,
      result,
      date: new Date(),
    };

    setHistories([historyList, ...histories]);
  };

  const handleReset = () => {
    setInputState(inputObj);
    setResult(0);
  };

  return (
    <div>
      <h2>JSON to JSX to JSON</h2>
      <div>
        <h3 style={{ margin: "1rem" }}>
          Result: {result.type === "NaN" ? 0 : result}
        </h3>
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

      {/* History section */}
      <div style={{ marginTop: "1rem" }}>
        <h3
          style={{
            backgroundColor: "green",
            color: "white",
            width: "40%",
            margin: "0 auto",
            padding: "2px",
            marginBottom: "1rem",
          }}
        >
          Operation History
        </h3>
        {histories.length === 0 ? (
          <p>
            <small>No history here</small>
          </p>
        ) : (
          <ul>
            {histories.map((historyItem) => (
              <li key={historyItem.id}>
                <p>
                  <strong>Operation</strong>: {historyItem.input.a}{" "}
                  {historyItem.operator} {historyItem.input.b}
                </p>
                <p>
                  <strong>Result</strong>: {historyItem.result}
                </p>
                <small>
                  <strong>Date</strong>: {historyItem.date.toLocaleDateString()}
                  ;{" "}
                </small>
                <small>
                  <strong>Time</strong>: {historyItem.date.toLocaleTimeString()}
                </small>{" "}
                <br />
                <button>Restore</button>
                <div
                  className="hr__line"
                  style={{ marginBottom: "1rem" }}
                ></div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
export default App;
