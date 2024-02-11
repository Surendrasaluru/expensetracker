import React, { useState } from "react";

const Form = ({ addTransaction }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState();
  const [type, setType] = useState("income");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction({ desc, amount: parseFloat(amount), type });
    setDesc("");
    setAmount("");
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        value={desc}
        placeholder="Enter description"
        required
        onChange={(e) => {
          setDesc(e.target.value);
        }}
      />
      <input
        type="number"
        value={amount}
        placeholder="Enter amount"
        required
        onChange={(e) => {
          setAmount(e.target.value);
        }}
      />
      <select
        className="select"
        value={type}
        onChange={(e) => {
          setType(e.target.value);
        }}
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <button type="submit" className="button">
        Add
      </button>
    </form>
  );
};

export default Form;
