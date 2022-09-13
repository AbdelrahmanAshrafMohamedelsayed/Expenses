import React from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
function NewExpense(props) {
  const onSaveExpenseHandler = (ExpenseObj) => {
    const newExpense = {
      ...ExpenseObj,
      id: Math.random().toString(),
    };
    // console.log(newExpense);
    props.onSaveExpense(newExpense);
  };
  return (
    <div className="NewExpense">
      <ExpenseForm onSaveExpense={onSaveExpenseHandler} />
    </div>
  );
}

export default NewExpense;
