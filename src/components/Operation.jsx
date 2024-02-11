/* eslint-disable react/prop-types */

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
    </div>
  );
};

export default Operation;
