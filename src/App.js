import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import ExpenseSummary from './components/ExpenseSummary';
import ExpenseChart from './components/ExpenseChart';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div>
      <NavBar />
      <Header />
      <div className="container mt-4">
        <ThemeToggle />
        <ExpenseForm addExpense={addExpense} />
        <ExpenseSummary expenses={expenses} />
        <ExpenseChart expenses={expenses} />
        <ExpenseList expenses={expenses} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
