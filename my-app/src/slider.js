
import React, { Component } from 'react';
import './HistSlider.css';

class SliderTab extends Component {
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
    this.outputRef = React.createRef();
    this.qRef = React.createRef();
    this.minRef = React.createRef();
    this.maxRef = React.createRef();
    this.state = { min: 1, max: 100 }

    // console.log(this.props);

    this.state = {
      checked: false,
      minVal: Number,
      maxVal: Number
    }

    this.handleChange = this.handleChange.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  delete() {
    this.props.delete(this.props.count);
  }

  getCount() {
    this.props.getCount(this.props.count);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleChange(type, q, count) {
    this.props.handleChange(type, q, count);
  }

  componentDidMount() {
  }

  render() {
    return (
      <form className="unit">
        {this.state.minVal}
        <input type="range" min={this.state.minVal} max= {this.state.maxVal} defaultValue="50" className="slider" name="myRange" id="myRange" ref={this.sliderRef} />
        {this.state.maxVal} <br/>
      </form>
    )
  }
}

export default SliderTab;