import { useState } from "react";
import shortid from "shortid";
import "./style.css";

const inputObject = {
  a: 20,
  b: 10,
};

const PracticeHome = () => {
  const [inputState, setInputState] = useState({ ...inputObject });
  const [result, setResult] = useState(0);
  const [histories, setHistories] = useState([]);

  const handleChange = (e) => {
    setInputState({
      ...inputState,
      [e.target.name]: e.target.value,
    });
  };

  const handleOperations = (operator) => {
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
                Operation: {history.inputs.a} {history.operator}
                {history.inputs.b}
              </p>
              <p>Result: {history.result}</p>
              <small>Date: {history.date.toLocaleDateString()}</small> <br />
              <small>Time: {history.date.toLocaleTimeString()}</small> <br />
              <button className="restore__btn">Restore</button>
              <div className="hr__line"></div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PracticeHome;
