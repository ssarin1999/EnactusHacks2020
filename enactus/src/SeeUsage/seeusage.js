import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button, Col,Row, Card} from 'react-bootstrap'; 
import React from 'react';
import './seeusage.css';
import Chart from '../components/Chart';

class EnactusSeeUsage extends React.Component {
    constructor(){
        super();
        this.state = {
          chartData:{},
          average:'',
          percent:'',
          projection1Year:'0',
          projection1Tons:'',
          projection1Tax:'',
          projection1Social:'',
          projection2Year:'',
          projection2Tons:'',
          projection2Tax:'',
          projection2Social:'',
          projection3Year:'',
          projection3Tons:'',
          projection3Tax:'',
          projection3Social:''
        }
      }
    
      componentWillMount(){
        this.getChartData();
      }
    
      getChartData(){
        var s =[];
        var t =[];
        var avg = 10;
        var pchange = 0;
          var url ="http://localhost:8080/api/usage/test";
          fetch(url).then(response=> response.json().then(data => {

                for(var i = 0; i < data.length;i++){
                   s.push(data[i].usageKwh);
                   avg = avg + data[i].usageKwh;
                  
                }

                avg = avg/data.length;
                avg = Math.round(avg);
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

         url = "http://localhost:8080/api/usage/projection/project-test";
          fetch(url).then(response=> response.json().then(data => {
              t = data;

              this.setState({
                projection1Year:t[0][0]
              })
              this.setState({
                projection1Tons:t[0][1]
              })
              this.setState({
                projection1Tax:t[0][2]
              })
              this.setState({
                projection1Social:t[0][3]
              })

              this.setState({
                projection2Year:t[1][0]
              })
              this.setState({
                projection2Tons:t[1][1]
              })
              this.setState({
                projection2Tax:t[1][2]
              })
              this.setState({
                projection2Social:t[1][3]
              })

              this.setState({
                projection3Year:t[2][0]
              })
              this.setState({
                projection3Tons:t[2][1]
              })
              this.setState({
                projection3Tax:t[2][2]
              })
              this.setState({
                projection3Social:t[2][3]
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
    
    <Card className="year1" border="success" style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title><h2 class="green">{this.state.projection1Year}</h2></Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Projections for</Card.Subtitle>
    <Card.Text>
    <h4><span class="green">{this.state.projection1Tons}</span> Tonnes of Carbon</h4>
    <h4><span class="green">${this.state.projection1Tax}</span> of Carbon Tax</h4>
    <h4><span class="green">${this.state.projection1Social}</span> of Social Cost</h4>
    </Card.Text> 
  </Card.Body>
</Card>

<Card className="year2" border="success" style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title><h2 class="green">{this.state.projection2Year}</h2></Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Projections for</Card.Subtitle>
    <Card.Text>
    <h4><span class="green">{this.state.projection2Tons}</span> Tonnes of Carbon</h4>
    <h4><span class="green">${this.state.projection2Tax}</span> of Carbon Tax</h4>
    <h4><span class="green">${this.state.projection2Social}</span> of Social Cost</h4>
    </Card.Text> 
  </Card.Body>
</Card>

<Card className="year3" border="success" style={{ width: '19rem' }}>
  <Card.Body>
    <Card.Title><h2 class="green">{this.state.projection3Year}</h2></Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Projections for</Card.Subtitle>
    <Card.Text>
    <h4><span class="green">{this.state.projection3Tons}</span> Tonnes of Carbon</h4>
    <h4><span class="green">${this.state.projection3Tax}</span> of Carbon Tax</h4>
    <h4><span class="green">${this.state.projection3Social}</span> of Social Cost</h4>
    </Card.Text> 
  </Card.Body>
</Card>
    
    </div>
   
  
  );
}
}

export default EnactusSeeUsage;
