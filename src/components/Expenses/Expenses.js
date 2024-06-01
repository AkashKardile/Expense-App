import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("All");

  const filterChangeHnadler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = props.items.filter((expense) => {
    if (filteredYear === "All") {
      return props.items;
    } else {
      return expense.date.getFullYear().toString() === filteredYear;
    }
  });
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHnadler}
        ></ExpenseFilter>
        <ExpenseList items={filteredExpense}></ExpenseList>
      </Card>
    </div>
  );
};
export default Expenses;
