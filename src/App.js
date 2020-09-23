import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

//import logo from './logo.svg';
import Home from './pages/home';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <Container>
      <Row>
        <Col lg={2}></Col>
        <Col lg={8}><Home></Home></Col>
      </Row>
    </Container>
  );
}

export default App;
