import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Ripple from 'react-ink';
import setCategory from '../../actions/setCategory';
import getCategoryIcons from '../../actions/getCategoryIcons';
import setSearch from '../../actions/setSearch';

import './category.css';

class Category extends Component {

  setCategory() {
    const {currentPlatform, category, setSearch, setCategory, getCategoryIcons} = this.props;
    setSearch('');
    setCategory(category);
    getCategoryIcons(currentPlatform, category);
  }

  render() {
    const {title, category, currentCategory} = this.props;
    return (
      <button
        onClick={this.setCategory.bind(this)}
        className={category !== currentCategory ? 'category' : 'categoryActive'}>
        {title}
        <Ripple
          style={{color: '#fff'}}
          background={true}
        />
      </button>
    );
  }
}

const mapStateToProps = state => ({
  currentPlatform: state.platform,
  currentCategory: state.category
});

const mapDispatchToProps = dispatch => ({
  setCategory: bindActionCreators(setCategory, dispatch),
  getCategoryIcons: bindActionCreators(getCategoryIcons, dispatch),
  setSearch: bindActionCreators(setSearch, dispatch)
});

Category = connect(mapStateToProps, mapDispatchToProps)(Category);

export default Category;
