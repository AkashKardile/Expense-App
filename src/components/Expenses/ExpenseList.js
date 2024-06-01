import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = ({ items }) => {
  if (items.length === 0) {
    return <h2 className="expenses-list_fallback">Found no expenses</h2>;
  }
  return (
    <div>
      <ul className="expenses-list">
        {items.map((expense) => {
          return (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            ></ExpenseItem>
          );
        })}
      </ul>
    </div>
  );
};

export default ExpenseList;
