import React, {Component} from 'react';
import {connect} from 'react-redux';
import classnames from 'classnames';
import Ripple from 'react-ink';

import './icon.css';

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
    }, 100)
  }

  download = event => {
    const {icon, size} = this.props;
    const fileName = 'ic_' + icon.name + '_' + icon.platform_code + '_' + size + 'px';
    const svg = event.currentTarget.getElementsByTagName('svg')[0];
    svg.setAttribute('width', size);
    svg.setAttribute('height', size);
    const svgData = event.currentTarget.getElementsByTagName('svg')[0].outerHTML;
    const svgBlob = new Blob([svgData], {type: 'image/svg+xml;charset=utf-8'});
    const svgUrl = URL.createObjectURL(svgBlob);
    const downloadLink = document.createElement('a');
    downloadLink.href = svgUrl;
    downloadLink.download = fileName.toLowerCase().replace(' ', '_') + '.svg';
    document.body.appendChild(downloadLink);

    setTimeout(() => {
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }, 500)
  };

  render() {
    const {icon, size, delay} = this.props;
    const iconClass = classnames({
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
        <Ripple style={{color: '#2979FF'}}
        />
      </button>
    );
  }
}

const mapStateToProps = state => ({
  size: state.size
});

Icon = connect(mapStateToProps)(Icon);

export default Icon;
