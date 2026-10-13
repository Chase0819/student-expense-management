"use client";
import { SummaryCard } from "./components/SummaryCard";
import {useState} from "react";


const expenses: number = 1200;
 
export default function Home() {
  const [income, setIncome] = useState<number>(3000);
  const [amount, setAmount] = useState<string>("");
  return (
    <main className = "p-6">
      <h1 className = "text-3xl font-bold">Student Expense Manager</h1>
      <p>Welcome Back!</p>
      <SummaryCard title = "Income" value = {income} />
      <input
        type = "number" 
        value = {amount} 
        onChange = {(e) => setAmount(e.target.value)}
        placeholder = "Enter amount"
      />
      <button onClick = {() => {setIncome(income + Number(amount)); setAmount("")}}>Add Income</button>
      <SummaryCard title = "Expenses" value = {expenses} />
      <SummaryCard title = "Balance" value = {income-expenses} />
    </main>
  );
}
