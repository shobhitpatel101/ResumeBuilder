import React from 'react'
import {Component} from 'react';
import './App.css';
import Header from './header';
import Footer from './footer';
import {Container,Col,Row,Button} from 'react-bootstrap'
import { propTypes } from 'react-bootstrap/esm/Image';
import { render } from '@testing-library/react';

//componentDidMount() {}


  function App(){

    function generatePdf(){
      console.log("Hello");
      const {jsPDF} = require("jspdf");
      const doc = new jsPDF();
      doc.text("Hello World", 10, 10);
      doc.save("a4.pdf");
    }

    return (
      <div>
      <Header />
      <hr />
      
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
        <Row><Col><hr /></Col></Row> 
        
        <Row>
          <Col><p>Bio Details</p></Col>
          <Col><textarea></textarea></Col>
        </Row>

        <Row><Col><hr /></Col></Row> 
        
        <Row>
          <Col><p>Work Experience</p></Col>
          <Col><Button variant="success">Add</Button>{' '} </Col> 
        </Row>
        <Row>
          <div>
            <Container>
              <Row>              
                <Col><input type='CheckBox'></input></Col>
              </Row>
              <Row>
                <Col>Company Name</Col>
                <Col><input type='Text' placeholder='Company Name'></input></Col>
              </Row>
              <Row>
                <Col>Start Date</Col>
                <Col><input type='Date'></input></Col>
                <Col>End Date</Col>
                <Col><input type='Date'></input></Col>
              </Row>
              <Row>
                <Col>Title</Col>
                <Col><input type='Text' placeholder='Title'></input></Col>
              </Row>
              <Row>
                <Col>Work Description</Col>
                <Col><input type='Text' placeholder='Work Description'></input></Col>
              </Row>
              <Row>
                <Col>Technology Used</Col>
                <Col><input type='Text' placeholder='Technology Used'></input></Col>
              </Row>
              
            </Container>
          </div>
      
        </Row>

        <Row><Col><hr /></Col></Row> 

        <Row>
          <Col><p>Projects/Open Source</p></Col>
          <Col><Button variant="success">Add</Button>{' '} </Col> 
        </Row>
        <Row>
          <div>
            <Container>
              <Row>              
                <Col><input type='CheckBox'></input></Col>
              </Row>
              <Row>
                <Col>Project Title</Col>
                <Col><input type='Text' placeholder='Company Name'></input></Col>
              </Row>
              <Row>
                <Col>Start Date</Col>
                <Col><input type='Date'></input></Col>
                <Col>End Date</Col>
                <Col><input type='Date'></input></Col>
              </Row>
              <Row>
                <Col>Description</Col>
                <Col><input type='Text' placeholder='Project Description'></input></Col>
              </Row>
              <Row>
                <Col>Technology Used</Col>
                <Col><input type='Text' placeholder='Technology Used'></input></Col>
              </Row>
              
            </Container>
          </div>
      
        </Row>

        <Row><Col><hr /></Col></Row> 

        <Row>
          <Col><p>Education</p></Col>
          <Col><Button variant="success">Add</Button>{' '} </Col> 
        </Row>
        <Row>
          <div>
            <Container>
              <Row>              
                <Col><input type='CheckBox'></input></Col>
              </Row>
              <Row>
                <Col>Institute Name</Col>
                <Col><input type='Text' placeholder='Company Name'></input></Col>
              </Row>
              <Row>
                <Col>Start Date</Col>
                <Col><input type='Date'></input></Col>
                <Col>End Date</Col>
                <Col><input type='Date'></input></Col>
              </Row>
              <Row>
                <Col>Description</Col>
                <Col><input type='Text' placeholder='Education Description'></input></Col>
              </Row>
            </Container>
          </div>
      
        </Row>


        <Row><Col><hr /></Col></Row> 

        <Row>
          <Col><p>Certificate Details</p></Col>
          <Col><textarea></textarea></Col>
        </Row>


      <Button onClick={generatePdf}>Generate PDF</Button>

    </Container>

      <Footer />
      </div>
    );
  }


export default App;
