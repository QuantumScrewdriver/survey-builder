import React, { Component } from 'react';
import * as d3 from "d3";
import './HistSlider.css';

class Histogram extends Component {
  constructor(props) {
    super(props);
    
    this.sliderRef = React.createRef();
    this.graphRef = React.createRef();
    this.qRef = React.createRef();
    this.minRef = React.createRef();
    this.maxRef = React.createRef();

    this.state = {
      checked: false,
      minVal: Number,
      maxVal: Number,
      sliderPos: Number
    }

    this.onChange = this.onChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.drawChart();
  }

  delete() {
    this.props.delete(this.props.count);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleChange(type, q, count) {
    this.props.handleChange(type, q, count);
  }

  drawChart() {
    const data = this.props.data;
    const val = [1,2,3,4,5,6,7,8,9,10]
    const svg = d3.select(this.graphRef.current).append("svg")
      .attr("width", this.props.width)
      .attr("height", this.props.height)

    svg.selectAll("number")
      .data(val)
      .enter()
      .append("text")
      .attr("x", (d,i) => 2*d*this.props.width/data.length + 7 - this.props.width/data.length/2 - this.props.width/data.length)
      .attr("y", 325)
      .text((d)=>d)

    svg.selectAll("true")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => d.position * this.props.width/data.length + 7)
      .attr("y", (d, i) => (this.props.height - 3 * d.height - 200)*d.location + (350)*(1-d.location))
      .attr("width", this.props.width*2/ data.length - 10)
      .attr("height", (d, i) => d.height *3)
      .attr("fill", "#990000")
      .attr("opacity", 0.75)

    svg.selectAll("trueText")
      .data(data)
      .enter()
      .append("text")
      .text((d) => d.height)
      .attr("x", (d, i) => d.position * this.props.width/data.length + 7 + 23)
      .attr("y", (d, i) => (this.props.height - 3 * d.height/2 - 200)*d.location + (350 + 3*d.height/2)*(1-d.location))

    svg.selectAll("false")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", (d, i) => d.position * this.props.width/data.length + 7)
        .attr("y", (d, i) => (this.props.height - 3 * d.height - 3*d.falseHeight - 200)*d.location + (350 + 3*d.height)*(1-d.location))
        .attr("width", this.props.width*2/ data.length - 10)
        .attr("height", (d, i) => d.falseHeight *3)
        .attr("fill", "#0000FF")
        .attr("opacity", 0.75)

      svg.selectAll("falseText")
        .data(data)
        .enter()
        .append("text")
        .text((d) => d.falseHeight)
        .attr("x", (d, i) => d.position * this.props.width/data.length + 7 + 23)
        .attr("y", (d, i) => (this.props.height - 3 * d.height - 3*d.falseHeight/2 - 200)*d.location + (350 + 3*d.height + 3*d.falseHeight/2)*(1-d.location))
  }

  render() {
    const vertAlign = this.props.height / 2;
    // const step_size = this.props.width / this.props.data.length;
    return (
      <div>
        <div ref={this.graphRef}
          style={{ 
            position: "relative", 
            width: this.props.width, 
            margin: "auto" }}>
          <div 
            style={{ 
              position: "absolute",
              top: vertAlign}}>
            <input type="range" min={this.state.minVal} max={this.state.maxVal} 
              className="hist-slider" onChange={this.onChange}
              name="sliderPos" value={this.state.sliderPos}
              step={this.props.step} ref={this.sliderRef}
              style={{ width: this.props.width }}/>
          </div>
        </div>
        {this.state.minVal}
        
        <input type="range" class="dummy-slider" 
          style={{ width: this.props.width }} onChange={this.onChange}
          name="sliderPos" value={this.state.sliderPos} step={this.props.step}
          min={this.state.minVal} max={this.state.maxVal} />
        {this.state.maxVal}
        
        <br/><br/>
        <p> Blue -- not re-arrested</p>
        <p> Red -- re-arrested</p>
        
        <div className="boxed">
          Question: <br/>
          <textarea cols="60" rows="10" ref={this.qRef} 
            onInput={() => this.handleChange("Question", this.qRef.current.value, this.props.count)}>
          </textarea>

          <br/>
          <p>Minimum: 
            <input onInput={() => this.handleChange("lowRange", this.minRef.current.value, this.props.count)} 
            ref={this.minRef} type="text" 
            name="minVal" value={this.state.minVal} onChange={this.onChange}/></p>
          
          <br/>
          <p>Maximum: <input onInput={() => this.handleChange("highRange", this.maxRef.current.value, this.props.count)} 
            ref={this.maxRef} type="text" 
            name="maxVal" value={this.state.maxVal} onChange={this.onChange}/></p>

          <br/>
          <button onClick={this.delete.bind(this)}>Delete</button>
        </div>
      </div>
    )
  }
}

export default Histogram;