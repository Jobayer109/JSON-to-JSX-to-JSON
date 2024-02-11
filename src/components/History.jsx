/* eslint-disable react/prop-types */
const History = ({ histories, historyRestore, handleRestore }) => {
  return (
    <div style={{ marginTop: "1rem" }}>
      <h3
        style={{
          backgroundColor: "green",
          color: "white",
          width: "40%",
          margin: "0 auto",
          padding: "2px",
          marginBottom: "1rem",
        }}
      >
        Operation History
      </h3>
      {histories.length === 0 ? (
        <p>
          <small>No history here</small>
        </p>
      ) : (
        <ul>
          {histories.map((historyItem) => (
            <li key={historyItem.id}>
              <p>
                <strong>Operation</strong>: {historyItem.input.a}{" "}
                {historyItem.operator} {historyItem.input.b}
              </p>
              <p>
                <strong>Result</strong>: {historyItem.result}
              </p>
              <small>
                <strong>Date</strong>: {historyItem.date.toLocaleDateString()};{" "}
              </small>
              <small>
                <strong>Time</strong>: {historyItem.date.toLocaleTimeString()}
              </small>{" "}
              <br />
              <button
                onClick={() => handleRestore(historyItem)}
                disabled={
                  historyRestore !== null &&
                  historyRestore.id === historyItem.id
                }
              >
                Restore
              </button>
              <div className="hr__line" style={{ marginBottom: "1rem" }}></div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default History;
