# JSON to JSX to JSON

This project provides a basic level understanding about JSON and JSX. Here I try to find out the actual beauty of React.

`Here we talk about 2 things:`
 - JSON to JSX
 - JSX to JSON

### Technique of Handling multiple event (Interesting)
- Handling with function constructor.
- Handling with the help of eval()
 Example:

   `handle by creating function on the fly`
    const opsFunc = new Function(
      "operator",
      `return ${inputState.a} ${operator} ${inputState.b}`
    );
    setResult(opsFunc(operator));

   //` handle using eval()`
    const res = eval(`${inputState.a} ${operator} ${inputState.b}`);
    setResult(res);
    console.log(res);
 
   `<button onClick={() => handleArithmeticOps("+")}>+</button>`