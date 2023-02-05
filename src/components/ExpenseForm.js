import AddCircleIcon from "@mui/icons-material/AddCircle";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Icon, IconButton, TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
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
    };
    setIsValid(true);
    console.log(expenses);
    props.onSubmitHandler(expenses);
    setName("");
    setAmount("");
  };
  return (
    <div>
      <form
        className=" flex flex-col rounded-lg bg-red-200 p-5"
        onSubmit={submitHandler}
      >
        <TextField
          className={`text-field.${!isValid ? "invalid" : ""}`}
          label="Name"
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
        <IconButton type="submit">
          <AddCircleIcon color="success" />
        </IconButton>
      </form>
    </div>
  );
};

export default ExpenseForm;
