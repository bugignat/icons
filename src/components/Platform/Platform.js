import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setPlatform} from '../../actions/setPlatform';
import Ripple from 'react-ink';

import './Platform.css';

class Platform extends Component {

  setPlatform = () => {
    const {platform, setPlatform} = this.props;
    setPlatform(platform);
  };

  render() {
    const {title, platform, currentPlatform} = this.props;
    return (
      <button
        onClick={this.setPlatform}
        className={platform !== currentPlatform ? 'platform' : 'platformActive'}>
        <span className="platformText">{title}</span>
        <span className="platformCaret"/>
        <Ripple style={{color: '#2979FF'}}/>
      </button>
    )
  }
}

const mapStateToProps = state => ({
  currentPlatform: state.platform,
  search: state.search
});

const mapDispatchToProps = dispatch => ({
  setPlatform: bindActionCreators(setPlatform, dispatch)
});

Platform = connect(mapStateToProps, mapDispatchToProps)(Platform);

export default Platform;
