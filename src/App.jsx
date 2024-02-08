import { useState } from "react";
import "./App.css";

const inputObj = {
  a: 0,
  b: 0,
};

function App() {
  const [inputState, setInputState] = useState(inputObj);

  const handleChange = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h2>JSON to JSX to JSON</h2>
      <div>
        <h3 style={{ margin: "1rem" }}>Result: 0</h3>
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
        <button>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button> <br />
        <button className="reset">Reset</button>
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
