import ExpenseForm from "@/components/ExpenseForm";
import ExpenseItem from "@/components/ExpenseItem";
import ExpenseImage from "@/images/expenses-image.jpg";
import Image from "next/image";
import React, { useState } from "react";
import Totals from "./Totals";

const Expenses = (props) => {
  let totalExpenses = 0;
  const onSubmitHandler = (formSubmissionExpenses) => {
    const expenses = {
      ...formSubmissionExpenses,
      id: Math.random(),
    };
    props.onAddExpense(expenses);
  };
  return (
    <div className="space-y-5 m-10 w-full">
      <div className="flex flex-col md:flex-row bg-white p-5 rounded-xl  justify-evenly h-full items-center">
        <div className="w-[40%] h-full p-5  mx-auto flex items-center justify-center">
          <ExpenseForm
            expenses={props.expenses}
            onSubmitHandler={onSubmitHandler}
          />
        </div>
        <div className="w-[60%] h-full ">
          <Image
            className="object-cover h-full rounded-xl "
            src={ExpenseImage}
            alt=""
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default Expenses;
