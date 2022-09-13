import React from "react";
import { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  const [Title, setTitle] = useState("");
  const [Amount, setAmount] = useState("");
  const [date, setdate] = useState("");
  const [FormDissaper, setFormDissaper] = useState(true);
  //   const [userInput, setuserInput] = useState({
  //     Title: "",
  //     Amount: "",
  //     date: "",
  //   });
  const TitleHandler = (e) => {
    // console.log(e.target.value);
    setTitle(e.target.value);
    // setuserInput({
    //   ...userInput,
    //   Title: e.target.value,
    // });
    // setuserInput((PrevState) => {
    //   return { ...PrevState, Title: e.target.value };
    // });
  };
  const AmountHandler = (e) => {
    // console.log(e.target.value);
    setAmount(e.target.value);
    // setuserInput({
    //   ...userInput,
    //   Amount: e.target.value,
    // });
  };
  const dateHandler = (e) => {
    // console.log(e.target.value);
    setdate(e.target.value);
    // setuserInput({
    //   ...userInput,
    //   date: e.target.value,
    // });
    // setuserInput((PrevState) => {
    //   return { ...PrevState, Title: e.target.value };
    // });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newObj = {
      title: Title,
      amount: +Amount,
      date: new Date(date),
    };
    // console.log(newObj);
    props.onSaveExpense(newObj);
    setAmount("");
    setdate("");
    setTitle("");
    setFormDissaper(true);
  };
  if (FormDissaper === true) {
    return (
      <div className="AddNew">
        <button onClick={() => setFormDissaper(false)}>Add New Expense</button>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={TitleHandler} value={Title} required />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min=".01"
            step=".01"
            required
            onChange={AmountHandler}
            value={Amount}
          />
        </div>

        <div className="new-expense__control">
          <label>date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2020-12-31"
            step=".01"
            onChange={dateHandler}
            value={date}
            required
          />
        </div>
      </div>
      <div className="buttons">
        <div className="new-expense__actions">
          <button>Add expense</button>
        </div>
        <div className="new-expense__actions">
          <button onClick={() => setFormDissaper(true)}>Cancel</button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
