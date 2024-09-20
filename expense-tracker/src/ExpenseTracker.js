import React, { useState } from 'react'

export const ExpenseTracker = () => {
    const [input,setInput] = useState('');
    const [amount,setAmount] = useState('');
    const [expenses,setExpenses] = useState([]);
    const addExpense = () => {
        if(!input || !amount) return;
        const newExpense = {
                id : Date.now(),
                title:input,
                amount:amount
            };
        setExpenses([...expenses,newExpense]);
        setInput('');
        setAmount('');
    }

    const deleteExpense = (id) => {
        setExpenses(expenses.filter((expense) => expense.id !== id));
    }
  return (
    <div className='container'>
        <h2>ExpenseTracker</h2>
        <div>
            <input type='text' placeholder='Expense' value={input} onChange={(e) => setInput(e.target.value)}/>
            <input type='number' placeholder='Amount' value={amount} onChange={(e) => setAmount(e.target.value)}/>
            <button onClick={addExpense}>Add Expense</button>
        </div>
        
        <ul className='expense-list'>
            {
             expenses.map((expense) => (
                <li key={expense.id}><span>{expense.title}</span>
                                     <span>&#8377;{expense.amount}</span>
                                     <button onClick={() => deleteExpense(expense.id)}>Delete</button>
                </li>
             ))
            }
        </ul>
    </div>
  )
}
