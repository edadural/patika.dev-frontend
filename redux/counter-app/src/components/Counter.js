import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../redux/counter/counterSlice";
import { useState } from "react";

function Counter() {
  const countValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [amount, setAmount] = useState(3);

  const containerStyle = {
    textAlign: "center",
    marginTop: "50px",
    backgroundColor: "#f0f0f0",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    marginLeft: "auto",
    marginRight: "auto",
  };

  const buttonStyle = {
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    padding: "10px 20px",
    margin: "5px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1em",
    transition: "background-color 0.2s ease-in-out",
  };

  const inputStyle = {
    padding: "10px",
    margin: "15px 5px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "80px",
    textAlign: "center",
    fontSize: "1em",
  };

  const headingStyle = {
    color: "#333",
    marginBottom: "25px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Count: {countValue}</h1>
      <button style={buttonStyle} onClick={() => dispatch(decrement())}>
        Decrement
      </button>
      <button style={buttonStyle} onClick={() => dispatch(increment())}>
        Increment
      </button>
      <br />
      <br />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        style={inputStyle}
      />
      <button
        style={buttonStyle}
        onClick={() => dispatch(incrementByAmount(Number(amount)))}
      >
        Increment by amount
      </button>
    </div>
  );
}

export default Counter;
