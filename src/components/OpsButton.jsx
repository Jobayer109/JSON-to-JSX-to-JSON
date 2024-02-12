/* eslint-disable react/prop-types */
const OpsButton = ({ handleArithmeticOps, handleReset }) => {
  return (
    <div>
      <button onClick={() => handleArithmeticOps("+")}>+</button>
      <button onClick={() => handleArithmeticOps("-")}>-</button>
      <button onClick={() => handleArithmeticOps("*")}>*</button>
      <button onClick={() => handleArithmeticOps("/")}>/</button> <br />
      <button onClick={handleReset} className="reset"></button>
    </div>
  );
};

export default OpsButton;
