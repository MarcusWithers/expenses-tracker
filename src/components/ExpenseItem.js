import DeleteIcon from "@mui/icons-material/Delete";
import { Icon, IconButton } from "@mui/material";
import React from "react";

const ExpenseItem = (props) => {
  return (
    <>
      <div className="flex flex-col md:flex-row text-center md:text-left items-center justify-center md:space-x-5 text-xl mb-5 p-2">
        <h3 className=" ">
          {props.name}: ${props.amount}
        </h3>
        <p className="">{props.date}</p>
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
