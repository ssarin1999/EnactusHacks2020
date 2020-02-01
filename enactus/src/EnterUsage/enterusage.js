import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Col} from 'react-bootstrap'; 
import React from 'react';
import './enterusage.css';


class EnactusEnterUsage extends React.Component {
  render(){
  return (
    
    <div className="App">
      
    <div class="input-form">
      
      <Form>
    <h1>Add Usage</h1>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Usage</Form.Label>
      <Form.Control type="text" placeholder="Enter your energy consumption (in kWh)" />
    </Form.Group>
  </Form.Row>
  
  <Form.Group controlId="formGridDesc">
      <Form.Label>Date</Form.Label>
      <Form.Control type="date" placeholder="Enter date this usage is for " as="textarea" rows="3" />
    </Form.Group>
  <Button variant="outline-danger" type="submit">
    Create Motive
  </Button>
</Form>
</div>
    </div>
   
  
  );
}
}

export default EnactusEnterUsage;
