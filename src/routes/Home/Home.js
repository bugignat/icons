import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getContent} from '../../actions/getContent';
import PlatformList from '../../components/PlatformList/PlatformList';
import CategoryList from '../../components/CategoryList/CategoryList';
import SearchBar from '../../components/SearchBar/SearchBar';
import IconList from '../../components/IconList/IconList';

import './Home.css';

class Home extends Component {

  componentDidMount() {
    const {getContent} = this.props;
    getContent();
  }

  render() {

    const {platforms, categories, icons} = this.props;

    return (
      <div className="container">
        <div className="panelContainer">
          <div className="topContainer">
            <SearchBar/>
          </div>
          <div className="filtersContainer">
            <div className="platformsContainer">
              <PlatformList platforms={platforms}/>
            </div>
            <div className="categoriesContainer">
              <CategoryList categories={categories}/>
            </div>
          </div>
        </div>
        <div className="contentContainer">
          <div className="iconsContainer">
            <IconList icons={icons}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  platforms: state.platforms,
  categories: state.categories,
  icons: state.icons
});

const mapDispatchToProps = dispatch => ({
  getContent: bindActionCreators(getContent, dispatch)
});

Home = connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home;
