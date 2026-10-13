"use client";
import { SummaryCard } from "./components/SummaryCard";
import {useState} from "react";


const expenses: number = 1200;
 
export default function Home() {
  const [income, setIncome] = useState<number>(3000);
  const [amount, setAmount] = useState<string>("");
  return (
    <main className = "p-6 bg-gray-100 min-h-screen">
      <h1 className = "text-3xl font-bold text-gray-900">Student Expense Manager</h1>
      <p className = "text-gray-900">Welcome Back!</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <SummaryCard title = "Income" value = {income} />
        <SummaryCard title = "Expenses" value = {expenses} />
        <SummaryCard title = "Balance" value = {income-expenses} />
      </div>
      <div className="mt-6 space-y-4">
        <input className = "bg-white border border-gray-300 rounded-lg p-3 text-gray-900 w-full"
            type = "number"  
            value = {amount} 
            onChange = {(e) => setAmount(e.target.value)}
            placeholder = "Enter amount"
          />
        <button className = "bg-blue-600 text-white font-semibold rounded-lg p-3 w-full hover:bg-blue-700 cursor-pointer" onClick = {() => {setIncome(income + Number(amount)); setAmount("")}}>Add Income</button>
      </div>
    </main>
  );
}
