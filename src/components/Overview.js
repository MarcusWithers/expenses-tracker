import React from "react";
import ExpenseItem from "./ExpenseItem";
import Totals from "./Totals";

const Overview = ({ expenses, onDelete }) => {
  return (
    <div className="flex flex-col max-w-7xl h-[90%] mx-auto  p-[5rem] space-y-5 ">
      <div>
        <Totals expenses={expenses} />
      </div>
      <div className="bg-white h-full text-black rounded-lg p-5 overflow-hidden overflow-y-scroll">
        {expenses.map((expense, index) => (
          <ExpenseItem
            key={index}
            index={index}
            id={expense.id}
            name={expense.name}
            date={expense.date}
            amount={expense.amount}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Overview;
