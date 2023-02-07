import React from "react";

const Totals = (props) => {
  let totalExpenses = 0;
  return (
    <div className="flex flex-col md:flex-row items-center  bg-slate-400 rounded-lg p-5 text-4xl md:space-x-5 justify-center">
      {props.expenses.map((expense) => {
        totalExpenses += expense.amount;
      })}
      <p className="totals_name">Total - </p>
      <p className="totals_amount">${totalExpenses.toFixed(2)}</p>
    </div>
  );
};

export default Totals;
