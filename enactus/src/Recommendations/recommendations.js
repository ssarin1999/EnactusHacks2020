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
        let url = 'http://localhost:8080/api/usage';
        fetch(url, {
            method: 'post',
            headers: {'Content-Type' : 'application/json'},
            body : JSON.stringify({
                'clientName': this.state.energyprovider,
                'month': this.state.month,
                'year': this.state.year,
                'usageDollar': this.state.cost,
                'usageKwh': this.state.usage,
                'carbonDollar': this.state.carbon
            })
        }).then(res => {
            if (res.ok) console.log(res.json())
        }).then(data => {
            window.location.replace("/see");
        });


        event.preventDefault();
       
    }
    
    };

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
              <h5 class="h5-signup">1</h5>
              <input type="number" placeholder="1 (Most Important) to 6 (Least Important)" min="1" max="6" cost={this.state.cost} onChange={this.handleCost} required/>
              </Col>
              <Col>
              <h5 class="h5-signup">2</h5>
              <input type="number" placeholder="1 (Most Important) to 6 (Least Important)"  min="1" max="6" cost={this.state.cost} onChange={this.handleCost} required/>
              </Col>
              </Row>
              
              <Row>
                <Col>
                <h5 class="h5-signup">3</h5>
              <input type="number" placeholder="1 (Most Important) to 6 (Least Important)"  min="1" max="6" cost={this.state.cost} onChange={this.handleCost} required/>
              </Col>
              <Col>
              <h5 class="h5-signup">4</h5>
              <input type="number" placeholder="1 (Most Important) to 6 (Least Important)"  min="1" max="6" cost={this.state.cost} onChange={this.handleCost} required/>
              </Col>
              </Row>
              <Row>
                <Col>
                <h5 class="h5-signup">5</h5>
              <input type="number" placeholder="1 (Most Important) to 6 (Least Important)"  min="1" max="6" cost={this.state.cost} onChange={this.handleCost} required/>
              </Col>
              <Col>
              <h5 class="h5-signup">6</h5>
              <input type="number" placeholder="1 (Most Important) to 6 (Least Important)"  min="1" max="6" cost={this.state.cost} onChange={this.handleCost} required/>
              </Col>
              </Row>
              
          
            </div>
            </Form>
            </div>
        );
    }
}

export default Login;