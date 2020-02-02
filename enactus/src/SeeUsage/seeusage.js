import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Col,Row} from 'react-bootstrap'; 
import React from 'react';
import './seeusage.css';
import Chart from '../components/Chart';

class EnactusSeeUsage extends React.Component {
    constructor(){
        super();
        this.state = {
          chartData:{},
          average:'',
          percent:''
        }
      }
    
      componentWillMount(){
        this.getChartData();
      }
    
      getChartData(){
        var s =[];
        var avg = 10;
        var pchange = 0;
          const url ="http://localhost:8080/api/usage/test";
          fetch(url).then(response=> response.json().then(data => {

                for(var i = 0; i < data.length;i++){
                   s.push(data[i].usageKwh);
                   avg = avg + data[i].usageKwh;
                   console.log(avg);
                }

                avg = avg/data.length;
                avg = Math.round(avg);
                console.log(avg);
                this.setState({
                    average:avg
                }) 
            
                pchange = Math.round((data[data.length-1].usageKwh - data[data.length-2].usageKwh)/data[data.length-2].usageKwh*100);
                if(data[data.length-1].usageKwh > data[data.length-2].usageKwh){
                  pchange = pchange*(-1);
                }

                this.setState({
                    percent:pchange
                }) 
            }
        )
          )

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
    
  render(){
  return (
    
    <div className="App">
<div class="background-shape1"></div>
<h1 class="usage-title">Your Usage</h1>
        <Chart class="chart" chartData={this.state.chartData}/>
    <h4 class="analysis">Your average consumption this year is {this.state.average} kWh per month<br/><br/>Your consumption has changed {this.state.percent}% since last month.</h4>

    </div>
   
  
  );
}
}

export default EnactusSeeUsage;
