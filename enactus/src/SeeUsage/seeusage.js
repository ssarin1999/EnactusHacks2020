import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Col,Row} from 'react-bootstrap'; 
import React from 'react';
import './seeusage.css';
import Chart from '../components/Chart';


class EnactusSeeUsage extends React.Component {
    constructor(){
        super();
        this.state = {
          chartData:{}
        }
      }
    
      componentWillMount(){
        this.getChartData();
      }
    
      getChartData(){
          const url ="http://localhost:8080/api/usage/Arya Inc.";

          fetch(url).then(
              data=>{
                var s =[];
                console.log(data);
                  for(var i = 0; i < data.length;i++){
                      s.append(data[i].usage);
                  }
                
                this.setState({
                   chartData:{
                       labels: ['J', 'F', 'M', 'A', 'M', 'J','J','A','S','O','N','D'],
                       datasets:[
                         {
                           label:'Energy Consumption (in kWh)',
                           data:s,
                           backgroundColor:[
                               'rgba(255, 255, 255,1)'
                            
                           ]
                         }
                       ]
                     }
               })
                
                }
        ).then(res=>{console.log(res)})
          
      
      }
    
  render(){
  return (
    
    <div className="App">
<div class="background-shape1"></div>
<h1 class="usage-title">Your Usage</h1>
        <Chart class="chart" chartData={this.state.chartData}/>

    </div>
   
  
  );
}
}

export default EnactusSeeUsage;
