import Banner from "@/components/Banner";
import Expenses from "@/components/Expenses";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";

export default function Home() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "expenses"));
    const snapshot = onSnapshot(q, (querySnapshot) => {
      let expensesArray = [];
      querySnapshot.forEach((doc) => {
        expensesArray.push({ ...doc.data(), id: doc.id });
      });
      setExpenses(expensesArray);
    });
    return () => snapshot;
  }, []);

  const onAddExpense = (expenseData) => {
    addDoc(collection(db, "expenses"), {
      name: expenseData.name,
      amount: expenseData.amount,
    });
  };

  const handleDelete = async (index, id) => {
    await deleteDoc(doc(db, "expenses", id));
  };

  return (
    <div className="bg-[rgb(71,71,71)] h-screen text-white ">
      <Banner />
      <section
        className="max-w-7xl mx-auto p-5 flex justify-center"
        id="expenses-form"
      >
        <Expenses
          expenses={expenses}
          onAddExpense={onAddExpense}
          onDelete={handleDelete}
        />
      </section>
    </div>
  );
}
