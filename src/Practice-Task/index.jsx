import "./style.css";

const PracticeHome = () => {
  return (
    <div>
      <h1>Practice Restore History</h1>
      <div>
        <h2>Result: 10</h2>

        <div>
          <input type="number" />
          <input type="number" />
        </div>
        <div>
          <button className="btnOps">+</button>
          <button className="btnOps">-</button>
          <button className="btnOps">*</button>
          <button className="btnOps">/</button>
        </div>
      </div>
      <div>
        <h4
          style={{
            backgroundColor: "green",
            color: "white",
            margin: "0 auto",
            marginTop: "1rem",
            marginBottom: "1rem",
            width: "40%",
          }}
        >
          Histories
        </h4>
        <ul>
          <li>
            <p>Operation: 10 + 20</p>
            <p>Result: 30</p>
            <small>Date: 2/12/2024</small> <br />
            <small>Time: 8:21:22 PM</small> <br />
            <button>Restore</button>
          </li>
          <div className="hr__line"></div>
        </ul>
      </div>
    </div>
  );
};

export default PracticeHome;
