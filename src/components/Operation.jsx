/* eslint-disable react/prop-types */

import InputFields from "./InputFields";

const Operation = ({
  result,
  handleChange,
  handleReset,
  handleArithmeticOps,
  inputState,
}) => {
  return (
    <div>
      <div>
        <h3 style={{ margin: "1rem" }}>
          Result: {result.type === "NaN" ? 0 : result}
        </h3>

        {Object.entries(inputState).map((item, i) => (
          <InputFields
            key={i}
            name={item[0]}
            value={item[1]}
            handleChange={handleChange}
          />
        ))}
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
    </div>
  );
};

export default Operation;
