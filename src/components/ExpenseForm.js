import React, { useState } from 'react';
import { Button, Form, Row, Col, Card } from 'react-bootstrap';

function ExpenseForm({ addExpense }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('Food');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && amount && date) {
      addExpense({ description, amount: parseFloat(amount), date, category });
      setDescription('');
      setAmount('');
      setDate('');
      setCategory('Food');
    }
  };

  return (
    <Card className="mb-4">
      <Card.Body>
        <h4 className="text-center mb-4">Add Expense</h4>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col sm={12} md={6}>
              <Form.Group controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  placeholder="Enter expense description"
                />
              </Form.Group>
            </Col>

            <Col sm={12} md={6}>
              <Form.Group controlId="amount">
                <Form.Label>Amount (R)</Form.Label>
                <Form.Control
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  required
                  placeholder="Enter amount"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col sm={12} md={6}>
              <Form.Group controlId="date">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </Form.Group>
            </Col>

            <Col sm={12} md={6}>
              <Form.Group controlId="category">
                <Form.Label>Category</Form.Label>
                <Form.Control
                  as="select"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option>Food</option>
                  <option>Transport</option>
                  <option>Utilities</option>
                  <option>Entertainment</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <div className="text-center">
            <Button variant="primary" type="submit">
              Add Expense
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default ExpenseForm;
