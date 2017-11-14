import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import fileDownload from 'react-file-download';
import Ripple from 'react-ink';

import './Icon.css';

class Icon extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        visible: true
      })
    })
  }

  download = () => {
    const {icon, size} = this.props;
    let fileName = 'ic_' + icon.name + '_' + size + 'px';
    fileName = fileName.toLowerCase().replace(' ', '_').replace('.', '') + '.svg';
    const buttonEl = ReactDOM.findDOMNode(this);
    const svgEl = buttonEl.getElementsByTagName('svg')[0];
    svgEl.setAttribute('width', size);
    svgEl.setAttribute('height', size);
    setTimeout(() => {
      fileDownload(svgEl.outerHTML, fileName);
    }, 500)
  };

  render() {
    const {icon, size, delay} = this.props;
    const iconClass = classNames({
      'icon': true,
      'iconActive': this.state.visible
    });

    return (
      <button
        title={icon.category + '/' + icon.name}
        onClick={this.download}
        className={iconClass}
        style={{padding: (100 - size) / 2, transitionDelay: delay / 50 + 's'}}>
        <div dangerouslySetInnerHTML={{__html: icon.svg}}/>
        <Ripple style={{color: '#2979FF'}}/>
      </button>
    );
  }
}

export default Icon;
