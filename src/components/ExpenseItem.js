import React from 'react';

function ExpenseItem({ expense }) {
  const formatCurrency = (amount) => {
    return `R${amount.toFixed(2)}`;
  };

  return (
    <div>
      <p>{expense.description} - {formatCurrency(expense.amount)} on {expense.date}</p>
    </div>
  );
}

export default ExpenseItem;
