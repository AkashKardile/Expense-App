import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title,
      amount,
      date: new Date(date),
    };

    props.onSaveExpenseData(expenseData);
    setAmount("");
    setTitle("");
    setDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-11"
            max="2022-12-31"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          ></input>
        </div>

        <div className="new-expense__actions">
          <button type="button" onClick={props.cancel}>
            Cancel
          </button>
          <button type="submit">Add Expenses</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
