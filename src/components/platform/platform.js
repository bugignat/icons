import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setPlatform} from '../../actions/setPlatform';
import {getCategories} from '../../actions/getCategories';
import {setCategory} from '../../actions/setCategory';
import {setSize} from '../../actions/setSize';
import {getCategoryIcons} from '../../actions/getCategoryIcons';
import {getSearchIcons} from '../../actions/getSearchIcons';
import Ripple from 'react-ink';

import './platform.css';

class Platform extends Component {

  setPlatform = () => {
    const {
      platform,
      size,
      currentCategory,
      search,
      setPlatform,
      getCategories,
      setCategory,
      setSize,
      getCategoryIcons,
      getSearchIcons
    } = this.props;

    setPlatform(platform);
    getCategories(platform);
    setCategory(currentCategory);
    setSize(size);
    search === ''
      ? getCategoryIcons(platform, currentCategory)
      : getSearchIcons(platform, search)
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
  currentCategory: state.category,
  search: state.search
});

const mapDispatchToProps = dispatch => ({
  setPlatform: bindActionCreators(setPlatform, dispatch),
  getCategories: bindActionCreators(getCategories, dispatch),
  setCategory: bindActionCreators(setCategory, dispatch),
  setSize: bindActionCreators(setSize, dispatch),
  getCategoryIcons: bindActionCreators(getCategoryIcons, dispatch),
  getSearchIcons: bindActionCreators(getSearchIcons, dispatch)
});

Platform = connect(mapStateToProps, mapDispatchToProps)(Platform);

export default Platform;
