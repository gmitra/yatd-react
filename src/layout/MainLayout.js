import React from 'react';
import { Container, Col, Row, Navbar } from 'react-bootstrap';

function MainLayout({ left, right, ...props }) {
  return (
    <div id="yatd-react">
      <Navbar bg="light">
        <Navbar.Brand href="/">Yet Another To-Do App [React]</Navbar.Brand>
      </Navbar>
      <Container fluid={false} className="content mt-4 mb-4">
        <Row>
          <Col xs={12} md={6} lg={3}>
            {left}
          </Col>
          <Col xs={12} md={6} lg={9}>
            {right}
          </Col>
        </Row>
      </Container>
      <footer className="footer text-muted">
        Made with React by GM
      </footer>
    </div>
  )
}

export default MainLayout;