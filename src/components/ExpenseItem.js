import React from 'react';
import { Card, Badge } from 'react-bootstrap';

function ExpenseItem({ expense }) {
  const formatCurrency = (amount) => `R${amount.toFixed(2)}`;

  return (
    <Card className="mb-3">
      <Card.Body className="d-flex justify-content-between">
        <div>
          <h5>{expense.description}</h5>
          <p className="text-muted">{expense.date}</p>
        </div>
        <div>
          <Badge bg="primary">{formatCurrency(expense.amount)}</Badge>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ExpenseItem;
