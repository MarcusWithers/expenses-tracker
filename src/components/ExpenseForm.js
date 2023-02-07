import AddCircleIcon from "@mui/icons-material/AddCircle";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Icon, IconButton, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [isValid, setIsValid] = useState(false);

  const nameInputHandler = (event) => {
    setName(event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
  };

  const amountInputHandler = (event) => {
    setAmount(event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
  };

  const dateInputHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (name.trim().length === 0 || amount.trim().length === 0) {
      setIsValid(false);
      return;
    }
    if (parseInt(amount) < 0.01) {
      setIsValid(false);
      return;
    }
    const expenses = {
      name: name,
      amount: parseFloat(amount),
      date: date,
    };
    setIsValid(true);
    console.log(expenses);
    props.onSubmitHandler(expenses);
    setName("");
    setAmount("");
    setDate("");
  };
  return (
    <div className="space-y-3">
      <div>
        <h1 className="text-black text-4xl text-center">Expenses Tracker</h1>
      </div>
      <form
        className=" flex flex-col rounded-lg  p-5 h-fill "
        onSubmit={submitHandler}
      >
        <TextField
          className={`text-field.${!isValid ? "invalid" : ""}`}
          label="Expense"
          value={name}
          variant="outlined"
          type="text"
          onChange={nameInputHandler}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AssignmentIcon />
              </InputAdornment>
            ),
          }}
        />
        <br />
        <TextField
          className={`text-field ${!isValid ? "invalid" : ""}`}
          label="Amount"
          value={amount}
          variant="outlined"
          type="number"
          step=".01"
          onChange={amountInputHandler}
          InputProps={{
            inputMode: "numeric",
            pattern: "[0-9]*",
            step: ".01",
            startAdornment: (
              <InputAdornment position="start">
                <AttachMoneyIcon />
              </InputAdornment>
            ),
          }}
        />
        <br />
        <TextField
          label="Date"
          value={date}
          varaiant="outlined"
          onChange={dateInputHandler}
          type="date"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AssignmentIcon />
              </InputAdornment>
            ),
          }}
        />
        <div className="flex justify-center items-center mt-2">
          <h2 className="text-black text-xl">Add Expense</h2>
          <IconButton type="submit">
            <AddCircleIcon color="success" />
          </IconButton>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
