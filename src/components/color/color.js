import React, {Component} from 'react';
import {connect} from 'react-redux';

import './color.css';

class Color extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: '#000000'
    };
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(e) {
    this.setState({
      color: e.target.value
    })
  }

  render() {
    return (
      <label className="color">
        <input type="color" onChange={this.changeValue}/>
        <span className="colorLabel" style={{backgroundColor: this.state.color}}/>
      </label>
    )
  }
}

const mapStateToProps = state => ({
  isColor: state.color.isColor
});

Color = connect(mapStateToProps)(Color);

export default Color;
