import { useState } from "react";
import shortid from "shortid";
import "./style.css";

const inputObject = {
  a: 0,
  b: 0,
};

const PracticeHome = () => {
  const [inputState, setInputState] = useState({ ...inputObject });
  const [result, setResult] = useState(0);
  const [histories, setHistories] = useState([]);
  const [restoreHistory, setRestoreHistory] = useState(null);

  const handleChange = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value,
    });
  };

  const handleOperations = (operator) => {
    if (!inputState.a || !inputState.b) {
      alert("Input a valid number");
      return;
    }
    const result = eval(`${inputState.a} ${operator} ${inputState.b}`);
    setResult(result);

    const historyList = {
      id: shortid.generate(),
      inputs: { ...inputState },
      operator,
      result,
      date: new Date(),
    };

    setHistories([historyList, ...histories]);
  };

  const handleRestore = (history) => {
    setRestoreHistory(history);
    setInputState({ ...history.inputs });
    setResult(history.result);
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
          <button onClick={() => handleOperations("+")}>+</button>
          <button onClick={() => handleOperations("-")}>-</button>
          <button onClick={() => handleOperations("*")}>*</button>
          <button onClick={() => handleOperations("/")}>/</button>
        </div>
      </div>
      <div>
        <h4 className="history__title">Histories</h4>
        <ul>
          {histories.map((history) => (
            <li key={history.id}>
              <p>
                Operation:{" "}
                <strong>
                  {history.inputs.a} {history.operator} {history.inputs.b}
                </strong>
              </p>
              <p>
                Result: <strong>{history.result}</strong>
              </p>
              <small>Date: {history.date.toLocaleDateString()}</small> <br />
              <small>Time: {history.date.toLocaleTimeString()}</small> <br />
              <button
                onClick={() => handleRestore(history)}
                className="restore__btn"
                disabled={
                  restoreHistory !== null && restoreHistory.id === history.id
                }
              >
                Restore
              </button>
              <div className="hr__line"></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PracticeHome;
