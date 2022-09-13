import React from "react";
import ExpensesFilter from "../ExpenseFilter/ExpenseFilter";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import Chart from "../Chart/Chart";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [Year, setYear] = useState("2019");
  const onFilterHandler = (year) => {
    // console.log(year);
    setYear(year);
  };
  // console.log(typeof props.expenses[0].date.getFullYear());
  const FilteredExpenses = props.expenses.filter(
    (expense) => +Year === expense.date.getFullYear()
  );

  return (
    <Card className="expenses">
      {/* {props.expenses.map((expense) => (
        <ExpenseItem
          
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          
        />
      ))} */}

      <ExpensesFilter onFilter={onFilterHandler} selected={Year} />
      <ExpensesChart arr={FilteredExpenses} />
      {/* {FilteredExpenses.length === 0 ? (
        <p>No Expense Found</p>
      ) : (
        FilteredExpenses.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            key={expense.id}
          />
        ))
      )} */}
      <ExpensesList items={FilteredExpenses} />
    </Card>
  );
}

export default Expenses;
