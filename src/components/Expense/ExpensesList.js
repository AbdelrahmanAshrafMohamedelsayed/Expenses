import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";
function ExpensesList(props) {
  // <ExpenseItem
  let FilteredExpenses = props.items;
  let expenses = <p>No Expense Found</p>;
  if (props.items.length === 0) {
    return <h2>No Expense Found</h2>;
  }
  console.log("hh");
  return (
    <ul>
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
