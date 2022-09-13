import React from "react";
import "./ExpenseDate.css";
function ExpenseDate(props) {
  let month = props.date.getUTCMonth(); //months from 1-12
  let day = props.date.getUTCDate();
  let year = props.date.getUTCFullYear();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="date">
      <div className="month">{monthNames[month]}</div>
      <div className="year">{year}</div>
      <div className="day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
