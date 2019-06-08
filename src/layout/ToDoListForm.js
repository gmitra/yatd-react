import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AddToDo from '../components/AddToDo';
import ToDoList from '../components/ToDoList';

function ToDoListForm({ ...props }) {
  return (
    <Container>
      <Row>
        <Col>
          <AddToDo />
        </Col>
      </Row>
      <Row>
        <Col>
          <ToDoList />
        </Col>
      </Row>
    </Container>
  );
}

export default ToDoListForm;