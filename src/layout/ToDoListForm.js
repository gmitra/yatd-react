import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AddToDo from '../components/AddToDo';
import ToDoList from '../components/ToDoList';
import { ToDoProvider } from '../components/ToDoList/ToDoContext';

function ToDoListForm({ ...props }) {
  return (
    <ToDoProvider>
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
    </ToDoProvider>
  );
}

export default ToDoListForm;