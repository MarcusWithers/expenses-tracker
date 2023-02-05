import React from "react";

const Totals = (props) => {
  let totalExpenses = 0;
  return (
    <div className="flex bg-slate-400 rounded-lg p-5">
      {props.expenses.map((expense) => {
        totalExpenses += expense.amount;
      })}
      <p className="totals_name">Total - </p>
      <p className="totals_amount">${totalExpenses.toFixed(2)}</p>
    </div>
  );
};

export default Totals;
