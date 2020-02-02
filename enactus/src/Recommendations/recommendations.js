import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './recommendations.css';

import {Form, Button, Row, Col,Card} from 'react-bootstrap';



class Login extends React.Component {
  
    constructor(props){
        super(props)
        this.state = {
            speed: '',capacity: '',usage: '',con: '',del: '',cost: '',cust:'', prov1name:'',prov1type:'',prov1address:'',prov2name:'',prov2type:'',prov2address:'',prov3name:'',prov3type:'',prov3address:''};
    
        this.handleSpeed = this.handleSpeed.bind(this);
        this.handleCapacity= this.handleCapacity.bind(this);
        this.handleCon = this.handleCon.bind(this);
        this.handleDel = this.handleDel.bind(this);
        this.handleCost = this.handleCost.bind(this);
        this.handleCust = this.handleCust.bind(this);

        this.handleSubmit = this.handleSubmit.bind(this);
      }

      handleSpeed(event) {
        this.setState({speed: event.target.value});
      }
    
      handleCapacity(event) {
        this.setState({capacity: event.target.value});
      }
    
      handleCon(event) {
        this.setState({con: event.target.value});
      }
    
      handleDel(event) {
        this.setState({year: event.target.value});
      }

      handleCost(event) {
        this.setState({cost: event.target.value});
      }

      handleCust(event) {
        this.setState({cust: event.target.value});
      }
    
      handleSubmit(event) {
        let url = 'http://localhost:8080/api/provider/test/' + this.state.speed + ',' + this.state.capacity + ','+ this.state.con + ','+ this.state.del + ','+ this.state.cost + ','+ this.state.cust;
        fetch(url).then(response=> response.json().then(data => {

            var x = document.getElementById("survey");
            x.style.display ="none";
            console.log(data[0].type)

            this.setState({
                prov1name:data[0].name
            }) 
            this.setState({
                prov1type:data[0].type
            }) 
            this.setState({
                prov1address:data[0].address
            }) 
            this.setState({
                prov2name:data[1].name
            }) 
            this.setState({
                prov2type:data[1].type
            }) 
            this.setState({
                prov2address:data[1].address
            }) 
            this.setState({
                prov3name:data[2].name
            }) 
            this.setState({
                prov3type:data[2].type
            }) 
            this.setState({
                prov3address:data[2].address
            }) 

            var y = document.getElementsByClassName("provider1")[0];
            y.style.display ="block";
            y = document.getElementsByClassName("provider2")[0];
            y.style.display ="block";
            y = document.getElementsByClassName("provider3")[0];
            y.style.display ="block";

            var z = document.getElementsByClassName("background-shape")[0];
            z.style.display= "block";

        }))

        event.preventDefault();
       
    }
    

    render(){
        return (
            <div class="app">
            <div class="survey" id="survey">
            <Form onSubmit = {this.handleSubmit}>
            <div class="container">
              <div class = "surveyTitle">
                <h3 class="h2-signup">Let's Get To Know You Better</h3>
                <h4 class="h2-signup">Rank from Most Important (1) to Least Important (6) to You</h4>
                </div>
              
                <Row>
                <Col>
              <h5 class="h5-signup">Speed to Set Up</h5>
              <input type="number" placeholder="1 (Most Important) to 6 (Least Important)" min="1" max="6" speed={this.state.speed} onChange={this.handleSpeed} required/>
              </Col>
              <Col>
              <h5 class="h5-signup">Capacity</h5>
              <input type="number" placeholder="1 (Most Important) to 6 (Least Important)"  min="1" max="6" cost={this.state.capacity} onChange={this.handleCapacity} required/>
              </Col>
              </Row>
              
              <Row>
                <Col>
                <h5 class="h5-signup">Consistency</h5>
              <input type="number" placeholder="1 (Most Important) to 6 (Least Important)"  min="1" max="6" del={this.state.del} onChange={this.handleDel} required/>
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
              <input type="number" placeholder="1 (Most Important) to 6 (Least Important)"  min="1" max="6" cust={this.state.cust} onChange={this.handleCust} required/>
              </Col>
              </Row>
              
          </div>
            <div class = "buttonLoc">
    <button class="but" type="submit">Submit</button>
    </div>
            </Form>
            </div>

           
            <Card className="provider1"  border="success" style={{ width: '25rem' }}>
        <Card.Body>
            <Card.Title><h2 class="green">{this.state.prov1name}</h2></Card.Title>
            <Card.Subtitle className="mb-2 text-muted"><h3>Best Alternative</h3></Card.Subtitle>
            <Card.Text>
            <h6><span class="green">{this.state.prov1type}</span> </h6>
            <h5><span class="green">{this.state.prov1address}</span></h5>
            <h4><span class="green">https://3genergycorp.com/</span></h4>
            <h4><span class="green">(824) 580-4711</span></h4>
            </Card.Text> 
        </Card.Body>
        </Card>

        <Card className="provider2"  border="success" style={{ width: '25rem' }}>
        <Card.Body>
            <Card.Title><h2 class="green">{this.state.prov2name}</h2></Card.Title>
            <Card.Subtitle className="mb-2 text-muted"><h3>Second Best Alternative</h3></Card.Subtitle>
            <Card.Text>
            <h6><span class="green">{this.state.prov2type}</span> </h6>
            <h5><span class="green">{this.state.prov2address}</span></h5>
            <h4><span class="green">https://aersengineering.com/</span></h4>
            <h4><span class="green">(889) 514-5749</span></h4>
            </Card.Text> 
        </Card.Body>
        </Card>

        <Card className="provider3"  border="success" style={{ width: '25rem' }}>
        <Card.Body>
            <Card.Title><h2 class="green">{this.state.prov3name}</h2></Card.Title>
            <Card.Subtitle className="mb-2 text-muted"><h3>Third Best Alternative</h3></Card.Subtitle>
            <Card.Text>
            <h6><span class="green">{this.state.prov3type}</span> </h6>
            <h5><span class="green">{this.state.prov3address}</span></h5>
            <h4><span class="green">https://anixtercan.com/</span></h4>
            <h4><span class="green">(920) 638-8431</span></h4>
            </Card.Text> 
        </Card.Body>
        </Card>

<div class="background-shape"></div>
            

             

                

                </div>
        
        );
    }
}

export default Login;