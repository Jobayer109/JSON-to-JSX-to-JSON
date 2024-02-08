import "./App.css";

function App() {
  return (
    <div>
      <h2>JSON to JSX to JSON</h2>
      <div>
        <h3 style={{ margin: "1rem" }}>Result: 0</h3>
        <div className="input__div">
          <input style={{ marginBottom: "5px" }} type="number" /> <br />
          <input type="number" />
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
