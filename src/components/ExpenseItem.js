import DeleteIcon from "@mui/icons-material/Delete";
import { Icon, IconButton } from "@mui/material";
import React from "react";

const ExpenseItem = (props) => {
  return (
    <>
      <div className="flex items-center justify-center space-x-3">
        <h3 className=" ">{props.name} - </h3>
        <p className="">${props.amount}</p>
        <IconButton
          className="button"
          onClick={() => props.onDelete(props.index, props.id)}
        >
          <DeleteIcon className="button" />
        </IconButton>
      </div>
    </>
  );
};

export default ExpenseItem;
