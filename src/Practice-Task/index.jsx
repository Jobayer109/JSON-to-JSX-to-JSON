import { useState } from "react";
import "./style.css";

const inputObject = {
  a: 20,
  b: 10,
};

const PracticeHome = () => {
  const [inputState, setInputState] = useState({ ...inputObject });
  const [result, setResult] = useState(0);

  const handleChange = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value,
    });
  };

  const handleOperations = (operator) => {
    setResult(eval(`${inputState.a} ${operator} ${inputState.b}`));
  };

  return (
    <div>
      <h1>Practice Restore History</h1>
      <div>
        <h2>Result: {result}</h2>

        <div>
          <input
            type="number"
            name="a"
            value={inputState.a}
            onChange={handleChange}
          />
          <input
            type="number"
            name="b"
            value={inputState.b}
            onChange={handleChange}
          />
        </div>
        <div>
          <button onClick={() => handleOperations("+")} className="btnOps">
            +
          </button>
          <button onClick={() => handleOperations("-")} className="btnOps">
            -
          </button>
          <button onClick={() => handleOperations("*")} className="btnOps">
            *
          </button>
          <button onClick={() => handleOperations("/")} className="btnOps">
            /
          </button>
        </div>
      </div>
      <div>
        <h4
          style={{
            backgroundColor: "green",
            color: "white",
            margin: "0 auto",
            marginTop: "1rem",
            marginBottom: "1rem",
            width: "40%",
          }}
        >
          Histories
        </h4>
        <ul>
          <li>
            <p>Operation: 10 + 20</p>
            <p>Result: 30</p>
            <small>Date: 2/12/2024</small> <br />
            <small>Time: 8:21:22 PM</small> <br />
            <button className="restore__btn">Restore</button>
          </li>
          <div className="hr__line"></div>
        </ul>
      </div>
    </div>
  );
};

export default PracticeHome;
