"use client";
import { SummaryCard } from "./components/SummaryCard";
import {useState} from "react";


 
type Expense = {
  id: number;
  description: string;
  amount: number;
};

const initialExpenses: Expense[] = [
  {id: 1, description: "Groceries", amount: 80},
  {id: 2, description: "Coffee", amount: 6}
];

export default function Home() {
  const [income, setIncome] = useState<number>(3000);
  const [amount, setAmount] = useState<string>("");
  const [expenses, setExpenses] = useState<Expense[]>(initialExpenses);
  const [expenseDescription, setExpenseDescription] = useState<string>("");
  const [expenseAmount, setExpenseAmount] = useState<string>("");
  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
  return (
    <main className = "p-6 bg-gray-100 min-h-screen">
      <h1 className = "text-3xl font-bold text-gray-900">Student Expense Manager</h1>
      <p className = "text-gray-900">Welcome Back!</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <SummaryCard title = "Income" value = {income} />
        <SummaryCard title = "Expenses" value = {totalExpenses} />
        <SummaryCard title = "Balance" value = {income-totalExpenses} />
      </div>
      <div className="mt-6 space-y-4">
        <input className = "bg-white border border-gray-300 rounded-lg p-3 text-gray-900 w-full"
            type = "number"  
            value = {amount} 
            onChange = {(e) => setAmount(e.target.value)}
            placeholder = "Enter amount"
          />
        <button className = "bg-blue-600 text-white font-semibold rounded-lg p-3 w-full hover:bg-blue-700 cursor-pointer" onClick = {() => {setIncome(income + Number(amount)); setAmount("")}}>Add Income</button>
        <div>
          <input className = "bg-white border border-gray-300 rounded-lg p-3 text-gray-900 w-full"
            type = "text"
            value ={expenseDescription}
            onChange = {(e) => setExpenseDescription(e.target.value)}
            placeholder = "Enter description"
          />
          <input className = "bg-white border border-gray-300 rounded-lg p-3 text-gray-900 w-full"
            type = "number"
            value = {expenseAmount}
            onChange = {(e) => setExpenseAmount(e.target.value)}
            placeholder = "Enter amount"
          />
          <button className = "bg-blue-600 text-white font-semibold rounded-lg p-3 w-full hover:bg-blue-700 cursor-pointer"
           onClick = {() => {
            if(expenseDescription.trim() === "" || Number(expenseAmount) <= 0){
              return;
            }
            setExpenses([...expenses, {id: expenses.length + 1, description: expenseDescription, amount: Number(expenseAmount)}]); setExpenseDescription(""); setExpenseAmount("")}}>
            Add Expense</button>
        </div>
        <div className = "mt-6 bg-white rounded-xl p-6">
          <h2 className = "text-xl font-bold text-gray-900"> RecentExpenses</h2> 
          {expenses.map((expense) => (
            <div key = {expense.id} className = "flex justify-between items-center p-3 border-b border-gray-200"> 
              <span className = "text-gray-900"> {expense.description}</span>
              <span className = "text-gray-900"> {expense.amount}</span>
            </div>
          ))} 
        </div>
      </div>
    </main>
  );
}
