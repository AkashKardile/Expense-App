import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const dummy_expense = [
  {
    id: "e1",
    title: "Spiral NoteBook",
    amount: 599,
    date: new Date(2022, 7, 14),
  },

  {
    id: "e2",
    title: "Sketch Pens",
    amount: 450,
    date: new Date(2022, 3, 12),
  },

  {
    id: "e3",
    title: "Calender",
    amount: 340,
    date: new Date(2022, 7, 14),
  },

  {
    id: "e4",
    title: "Book",
    amount: 599,
    date: new Date(2022, 2, 14),
  },
];

const ExpenseApp24 = () => {
  const [expenses, setExpenses] = useState(dummy_expense);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const removeExpenseHandler = (id) => {};

  const editExpenseHandler = (id, expense) => {};
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
};

export default ExpenseApp24;
