import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Col} from 'react-bootstrap'; 
import React from 'react';
import './enterusage.css';


class EnactusEnterUsage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {energyprovider: '',cost: '',usage: '',month: '',year: ''};
    
        this.handleProvider = this.handleProvider.bind(this);
        this.handleCost = this.handleCost.bind(this);
        this.handleUsage = this.handleUsage.bind(this);
        this.handleMonth = this.handleMonth.bind(this);
        this.handleYear = this.handleYear.bind(this);
    
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleProvider(event) {
        this.setState({energyprovider: event.target.value});
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
    
      handleSubmit(event) {
        alert('Provider: ' + this.state.energyprovider + '\n' + 'Cost: ' + this.state.cost + '\n' + 'Usage: ' + this.state.usage + '\n' + 'Month: ' + this.state.month + '\n' + 'Year: ' + this.state.year + '\n');
        event.preventDefault();
      }
  render(){
  return (
    
    <div className="App">
    <div class="input-form">

<Form onSubmit = {this.handleSubmit}>
  <div class="container">
    <div class = "SignUpTitle">
      <h2 class="h2-signup">Enter Usage</h2>
      </div>
    
      <Col>
    <h5 class="h5-signup">Energy Provider</h5>
    <input type="name" placeholder="Name of Energy Provider" energyprovider={this.state.energyprovider} onChange={this.handleProvider} required/>
      </Col>
      <Col>
    <h5 class="h5-signup">Usage Cost (in $)</h5 >
    <input type="number" placeholder="Enter Usage Cost" cost={this.state.cost} onChange={this.handleCost} required/>
      </Col>
    
    
      <Col>
    <h5 class="h5-signup">Usage Amount (in kWh)</h5 >
    <input type="number" placeholder="Enter Usage Amount (in kWh)" usage ={this.state.usage} onChange={this.handleUsage} required/>
    </Col>

    <Col>
    <h5 class="h5-signup">Month</h5 >
    <input type="number" placeholder="Enter Month" min="1" max="12" month ={this.state.month} onChange={this.handleMonth} required/>

    <h5 class="h5-signup">Year</h5 >
    <input type="number" placeholder="Enter Year" min="1990" max="2020" year ={this.state.year} onChange={this.handleYear} required/>
    </Col>
    

      <div class = "buttonLoc">
    <button type="submit">Submit</button>
    </div>

  </div>
  </Form>
</div>

<div class="background-shape"></div>
    </div>
   
  
  );
}
}

export default EnactusEnterUsage;
