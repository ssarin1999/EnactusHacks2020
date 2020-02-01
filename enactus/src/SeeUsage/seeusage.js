import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Col,Row} from 'react-bootstrap'; 
import React from 'react';
import './seeusage.css';
import Chart from '../components/Chart';


class EnactusSeeUsage extends React.Component {
    
  render(){
  return (
    
    <div className="App">
<div class="background-shape1"></div>
        <Chart class="chart"/>

    </div>
   
  
  );
}
}

export default EnactusSeeUsage;
