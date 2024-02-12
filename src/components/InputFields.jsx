/* eslint-disable react/prop-types */
const InputFields = ({ name, value, handleChange }) => {
  return (
    <>
      <input type="number" name={name} value={value} onChange={handleChange} />
    </>
  );
};

export default InputFields;
