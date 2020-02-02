import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './projections.css';

import {Form, Button} from 'react-bootstrap';



class Projections extends React.Component {

    showProjections(){
    const url ="http://localhost:8080/api/usage/projection/project-test";
    fetch(url).then(response=> response.json().then(data => {

          for(var i = 0; i < data.length;i++)
            for(var j = 0; j < data[0].length;j++){
             console.log(data[i][j]);
          }
      

      }
  )
    )
    }
    render(){
        return (
           <div>
               {this.showProjections()};
            </div>
        );
    }
}

export default Projections;