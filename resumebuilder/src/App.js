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

      const firstname = document.getElementById('firstname').value;
      const middlename = document.getElementById('mn').value;
      const lastname = document.getElementById('ln').value;
      const biodetails = document.getElementById('bd').value;
      
      //name
      doc.setFontSize(30);
      var name = ""
      if(middlename === "")
        name = firstname + " " + lastname;
      else
        name = firstname + " " + middlename + " " + lastname;

      doc.text(name  , 5, 20);


      doc. setLineWidth(1);
      doc. setDrawColor(0, 0, 0); // draw red lines.
      doc.line(5, 25, 200, 25);    
      
      // bio details
      doc.setFontSize(15);
      doc.text(biodetails  , 5, 35);



      doc.save(firstname + lastname + "_resume.pdf");
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
          <Col><input type='Text' placeholder='First Name' id='firstname'></input></Col>
          <Col><input type='Text' placeholder='Middle Name' id='mn'></input></Col>
          <Col><input type='Text' placeholder='Last Name' id='ln'></input></Col>
        </Row>
        <Row><Col><hr /></Col></Row> 
        
        <Row>
          <Col><p>Bio Details</p></Col>
          <Col><textarea type='Text' id='bd'></textarea></Col>
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

        <Row>
          <Col><Button onClick={generatePdf}>Generate PDF</Button></Col>
        </Row>


    </Container>

    <hr/>

      <Footer />
      </div>
    );
  }


export default App;
