import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Ripple from 'react-ink';
import setSearch from '../../actions/setSearch';
import setCategory from '../../actions/setCategory';
import getSearchIcons from '../../actions/getSearchIcons';

import './search.css';

class Search extends Component {

  constructor(props) {
    super(props);
    this.changeValue = this.changeValue.bind(this);
    this.search = this.search.bind(this);
  }

  changeValue(e) {
    const {setSearch} = this.props;
    setSearch(e.target.value);
  }

  search() {
    const {search, currentPlatform, setCategory, getSearchIcons} = this.props;
    setCategory('');
    getSearchIcons(currentPlatform, search);
  }

  render() {
    const {search} = this.props;
    return (
      <div className="search">
        <span className="iconSearch"/>
        <input
          type="text"
          onChange={this.changeValue}
          value={search}/>
        <button
          onClick={this.search}
          disabled={search === ''}>
          <Ripple
            style={{color: '#fff'}}
            background={true}
            duration={1000}
          />
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentPlatform: state.platform,
  search: state.search
});

const mapDispatchToProps = dispatch => ({
  setSearch: bindActionCreators(setSearch, dispatch),
  setCategory: bindActionCreators(setCategory, dispatch),
  getSearchIcons: bindActionCreators(getSearchIcons, dispatch)
});

Search = connect(mapStateToProps, mapDispatchToProps)(Search);

export default Search;