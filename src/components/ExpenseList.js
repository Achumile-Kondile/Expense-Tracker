import React from 'react';
import ExpenseItem from './ExpenseItem';

function ExpenseList({ expenses }) {
  return (
    <div>
      {expenses.length > 0 ? (
        expenses.map((expense, index) => (
          <ExpenseItem key={index} expense={expense} />
        ))
      ) : (
        <div className="alert alert-info text-center">
          No expenses added yet.
        </div>
      )}
    </div>
  );
}

export default ExpenseList;
