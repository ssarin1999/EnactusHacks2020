import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
        chartData:{
            labels: ['J', 'F', 'M', 'A', 'M', 'J','J','A','S','O','N','D'],
            datasets:[
              {
                label:'Energy Consumption (in kWh)',
                data:[
                  1500,
                  1700,
                  1850,
                  1750,
                  1235,
                  1256,
                  1500,
                  1700,
                  1850,
                  1750,
                  1235,
                  1256
                  
                ],
                backgroundColor:[
                    'rgba(255, 255, 255,1)'
                 
                ]
              }
            ]
          }
    
    }
  }

  render(){
    return (
      <div className="chart">

        <Line
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:'Largest Cities In '+this.props.location,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
      </div>
    )
  }
}

export default Chart;