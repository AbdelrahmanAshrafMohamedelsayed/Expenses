import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
// import { useState } from "react";
function ExpenseItem(props) {
  // const [title, settitle] = useState(props.title);
  // const ClickHandler = () => {
  //   settitle("props.title");
  //   // props.onClick();
  // };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
        {/* <button onClick={ClickHandler}>Change title</button> */}
      </Card>
    </li>
  );
}

export default ExpenseItem;
