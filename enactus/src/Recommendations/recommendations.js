import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './recommendations.css';

import {Form, Button, Row, Col} from 'react-bootstrap';



class Login extends React.Component {
  
    constructor(props){
        super(props)
        this.state = {
            energyprovider: 'test',cost: '',usage: '',month: '',year: '',carbon: ''};
    
        this.handleCost = this.handleCost.bind(this);
        this.handleUsage = this.handleUsage.bind(this);
        this.handleMonth = this.handleMonth.bind(this);
        this.handleCarbon = this.handleCarbon.bind(this);
        this.handleYear = this.handleYear.bind(this);
    
        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleCost(event) {
        this.setState({cost: event.target.value});
      }
    
      handleUsage(event) {
        this.setState({usage: event.target.value});
      }
    
      handleMonth(event) {
        this.setState({month: event.target.value});
      }
    
      handleYear(event) {
        this.setState({year: event.target.value});
      }

      handleCarbon(event) {
        this.setState({carbon: event.target.value});
      }
    
      handleSubmit(event) {
        let url = 'http://localhost:8080/api/provider/test/1,2,3,4,5,6';
        fetch(url).then(res => {
            if (res.ok) console.log("Hello")
        }).then(data => {
            
        });


        event.preventDefault();
       
    }
    

    render(){
        return (
            <div class="survey">
            <Form onSubmit = {this.handleSubmit}>
            <div class="container">
              <div class = "surveyTitle">
                <h3 class="h2-signup">Let's Get To Know You Better</h3>
                <h4 class="h2-signup">Rank from Most Important (1) to Least Important (6) to You</h4>
                </div>
              
                <Row>
                <Col>
              <h5 class="h5-signup">Speed to Set Up</h5>
              <input type="number" placeholder="1 (Most Important) to 6 (Least Important)" min="1" max="6" cost={this.state.cost} onChange={this.handleCost} required/>
              </Col>
              <Col>
              <h5 class="h5-signup">Capacity</h5>
              <input type="number" placeholder="1 (Most Important) to 6 (Least Important)"  min="1" max="6" cost={this.state.cost} onChange={this.handleCost} required/>
              </Col>
              </Row>
              
              <Row>
                <Col>
                <h5 class="h5-signup">Consistency</h5>
              <input type="number" placeholder="1 (Most Important) to 6 (Least Important)"  min="1" max="6" cost={this.state.cost} onChange={this.handleCost} required/>
              </Col>
              <Col>
              <h5 class="h5-signup">Speed of Delivery</h5>
              <input type="number" placeholder="1 (Most Important) to 6 (Least Important)"  min="1" max="6" cost={this.state.cost} onChange={this.handleCost} required/>
              </Col>
              </Row>
              <Row>
                <Col>
                <h5 class="h5-signup">Cost</h5>
              <input type="number" placeholder="1 (Most Important) to 6 (Least Important)"  min="1" max="6" cost={this.state.cost} onChange={this.handleCost} required/>
              </Col>
              <Col>
              <h5 class="h5-signup">Customer Service</h5>
              <input type="number" placeholder="1 (Most Important) to 6 (Least Important)"  min="1" max="6" cost={this.state.cost} onChange={this.handleCost} required/>
              </Col>
              </Row>
              
          
            </div>
            <div class = "buttonLoc">
    <button type="submit">Submit</button>
    </div>
            </Form>
            </div>
        );
    }
}

export default Login;