import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setSearch} from '../../actions/setSearch';
import {setCategory} from '../../actions/setCategory';
import Ripple from 'react-ink';

import './SearchBar.css';

class Search extends Component {

  handleKeyPress = event => {
    if (event.key === 'Enter') {
      this.search();
    }
  };

  changeValue = event => {
    const {setSearch} = this.props;
    setSearch(event.target.value);
  };

  search = () => {
    const {
      search,
      setCategory,
    } = this.props;

    if (search !== '') {
      setCategory('');
    }
  };

  render() {
    const {search} = this.props;
    return (
      <div className="search">
        <span className="iconSearch"/>
        <input
          type="text"
          placeholder={'Type something...'}
          onChange={this.changeValue}
          onKeyPress={this.handleKeyPress}
          value={search}/>
        <button
          onClick={this.search}
          disabled={!search}>
          Search
          {
            search
              ? <Ripple style={{color: '#fff'}}/>
              : null
          }
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  search: state.search
});

const mapDispatchToProps = dispatch => ({
  setSearch: bindActionCreators(setSearch, dispatch),
  setCategory: bindActionCreators(setCategory, dispatch),
});

Search = connect(mapStateToProps, mapDispatchToProps)(Search);

export default Search;
