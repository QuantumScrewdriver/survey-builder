import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Histogram from './Histogram.js';
import * as d3 from "d3";
import Bar from './slider.js';

class App extends Component {
  
  state = {
    data: [
      {
        "height" : 10,
        "falseHeight" :25,
        "location" : 1,
        "position" : 0
      },
      {
        "height" : 16,
        "location" : 1,
        "falseHeight" :15,
        "position" : 2
      },
      {
        "height" : 14,
        "location" : 0,
        "falseHeight" :15,
        "position" : 0
      },
      {
        "height" : 16,
        "location" : 1,
        "falseHeight" :12,
        "position" : 4
      },
      {
        "height" : 30,
        "location" : 0,
        "falseHeight" :9,
        "position" : 2
      },
      {
        "height" : 25,
        "location" : 0,
        "falseHeight" :14,
        "position" : 4
      },
      {
        "height" : 16,
        "location" : 0,
        "falseHeight" :10,
        "position" : 6
      },
       {
        "height" : 18,
        "location" : 0,
        "falseHeight" :12,
        "position" : 8
      },
       {
        "height" : 20,
        "location" : 0,
        "falseHeight" :13,
        "position" : 10
      },
       {
        "height" : 21,
        "location" : 0,
        "falseHeight" :9,
        "position" : 12
      }
      , {
        "height" : 26,
        "location" : 0,
        "falseHeight" :8,
        "position" : 14
      }
      , {
        "height" : 30,
        "location" : 0,
        "falseHeight" :9,
        "position" : 16
      }
      , {
        "height" : 17,
        "location" : 0,
        "falseHeight" :15,
        "position" : 18
      }
      , {
        "height" : 20,
        "location" : 1,
        "falseHeight" :8,
        "position" : 6
      } 
      ,{
        "height" : 18,
        "location" : 1,
        "falseHeight" :17,
        "position" : 8
      },
       {
        "height" : 25,
        "location" : 1,
        "falseHeight" :10,
        "position" : 10
      },
       {
        "height" : 21,
        "location" : 1,
        "falseHeight" :15,
        "position" : 12
      },
       {
        "height" : 13,
        "location" : 1,
        "falseHeight" :18,
        "position" : 14
      } ,
      {
        "height" : 12,
        "location" : 1,
        "falseHeight" :20,
        "position" : 16
      } ,
      {
        "height" : 5,
        "location" : 1,
        "falseHeight" :25,
        "position" : 18
      }
    ],
    width: 700,
    height: 500,
    id: App,
    step: 10,
    scaleUp: 1,
    defaultValue : 0
  }

  render() {
    return (
      <div className="App">
        <Histogram data={this.state.data} width={this.state.width} height={this.state.height} step = {this.state.step} class = "center"/>
      </div>
    );
  }
}

export default App;

