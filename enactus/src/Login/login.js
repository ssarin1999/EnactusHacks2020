import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './login.css';

import {Form, Button} from 'react-bootstrap';



class Login extends React.Component {
  
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        };
    };


    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        });
    };

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        });
    };

    LoginSubmit = event => {
        window.location.replace("/see");
        
    };

    render(){
        return (
            <div class="login_page">
                <h1 >Login</h1>
                <p class="green">Welcome back! Login to access EnerTrack</p><br/>
            <Form onSubmit={this.LoginSubmit}>
                <Form.Group controlId="formBasicEmail">
                   
                    <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleEmailChange}/>
            
                </Form.Group>
                <br/>
                <Form.Group controlId="formBasicPassword">
                    
                    <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/>
                </Form.Group><br/>
                <div class="button">
                <Button  variant="outline-success" onClick={this.LoginSubmit}>
                    Log In
                </Button>

                </div>
               
            </Form>
            </div>
        );
    }
}

export default Login;