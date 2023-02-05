import ExpenseForm from "@/components/ExpenseForm";
import ExpenseItem from "@/components/ExpenseItem";
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
    <div className="space-y-5">
      <div className="">
        <Totals expenses={props.expenses} />
      </div>
      <div className="expenses">
        <div className="expenses_total"></div>
        <div className="expense_form>">
          <div>
            <ExpenseForm
              expenses={props.expenses}
              onSubmitHandler={onSubmitHandler}
            />
          </div>

          {props.expenses.map((expense, index) => (
            <ExpenseItem
              index={index}
              id={expense.id}
              name={expense.name}
              amount={expense.amount}
              onDelete={props.onDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expenses;
