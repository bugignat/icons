import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {SketchPicker} from 'react-color';
import setColorValue from '../../actions/setColorValue';

import './color.css';

class Color extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayColorPicker: false,
      color: this.props.colorValue,
    };
  }

  handleClick = () => {
    this.setState({displayColorPicker: !this.state.displayColorPicker})
  };

  handleClose = () => {
    this.setState({displayColorPicker: false})
  };

  handleChange = (color) => {
    this.setState({color: color.rgb});
    this.props.setColorValue(`rgba(${ this.state.color.r }, ${ this.state.color.g }, ${ this.state.color.b }, ${ this.state.color.a })`);
  };

  render() {
    return (
      <div className="colorPicker">
        <div className="swatch" onClick={this.handleClick}>
          <div className="color"
               style={{background: this.props.colorValue}}/>
        </div>
        {
          this.state.displayColorPicker
            ? <div className="popover">
                <div className="cover" onClick={this.handleClose}/>
                <SketchPicker
                  className="picker"
                  color={this.state.color}
                  onChangeComplete={this.handleChange}
                />
              </div>
            : null
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isColor: state.color.isColor,
  colorValue: state.color.value
});

const mapDispatchToProps = dispatch => ({
  setColorValue: bindActionCreators(setColorValue, dispatch)
});

Color = connect(mapStateToProps, mapDispatchToProps)(Color);

export default Color;
