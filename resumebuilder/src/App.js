import React from 'react'
import './App.css';
import Header from './header';
import Footer from './footer';
import {Container,Col,Row} from 'react-bootstrap'

//componentDidMount() {}

function App() {
  return (
    <div>
    <Header />
    
    <Container className='mainTable'>
      <Row>
        <Col><p>First Name</p></Col>
        <Col><p>Middle Name</p></Col>
        <Col><p>Last Name</p></Col> 
      </Row>
      <Row>
        <Col><input type='Text' placeholder='First Name'></input></Col>
        <Col><input type='Text' placeholder='Middle Name'></input></Col>
        <Col><input type='Text' placeholder='Last Name'></input></Col>
      </Row>

      <Row><Col>.</Col></Row> 
      
      <Row>
        <Col><p>Bio Details</p></Col>
        <Col><textarea></textarea></Col>
      </Row>

  </Container>

    <Footer />
    </div>
  );
}

export default App;
