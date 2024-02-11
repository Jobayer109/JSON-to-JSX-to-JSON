import { useState } from "react";
import shortid from "shortid";
import History from "./History";
import Operation from "./Operation";
import "./style.css";

const Home = () => {
  const inputObj = {
    a: 20,
    b: 10,
  };

  const [inputState, setInputState] = useState({ ...inputObj });
  const [result, setResult] = useState(0);
  const [histories, setHistories] = useState([]);
  const [historyRestore, setHistoryRestore] = useState(null);

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
      input: { ...inputState },
      operator,
      result,
      date: new Date(),
    };

    setHistories([historyList, ...histories]);
  };

  // Handle Restore button
  const handleRestore = (historyItem) => {
    setInputState({ ...historyItem.input });
    setResult(historyItem.result);
    setHistoryRestore(historyItem);
  };

  const handleReset = () => {
    setInputState(inputObj);
    setResult(0);
  };

  return (
    <div>
      <h2>JSON to JSX to JSON</h2>

      <Operation
        result={result}
        handleChange={handleChange}
        handleReset={handleReset}
        handleArithmeticOps={handleArithmeticOps}
        inputState={inputState}
      />
      <History
        histories={histories}
        handleRestore={handleRestore}
        historyRestore={historyRestore}
      />
    </div>
  );
};

export default Home;
