import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

function ExpenseSummary({ expenses }) {
  const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>Total Expenses</Card.Title>
        <h3>{`R${total.toFixed(2)}`}</h3>
      </Card.Body>
    </Card>
  );
}

export default ExpenseSummary;
