import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setCategory} from '../../actions/setCategory';
import {setSearch} from '../../actions/setSearch';
import Ripple from 'react-ink';

import './Category.css';

class Category extends Component {

  setCategory = () => {
    const {category, setSearch, setCategory} = this.props;
    setSearch('');
    setCategory(category)
  };

  render() {
    const {title, category, currentCategory} = this.props;
    return (
      <button
        onClick={this.setCategory}
        className={category !== currentCategory ? 'category' : 'categoryActive'}>
        {title}
        <Ripple style={{color: '#2979FF'}}/>
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
  setSearch: bindActionCreators(setSearch, dispatch)
});

Category = connect(mapStateToProps, mapDispatchToProps)(Category);

export default Category;
