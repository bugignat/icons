import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import getPlatforms from '../../actions/getPlatforms';
import getCategories from '../../actions/getCategories';
import getCategoryIcons from '../../actions/getCategoryIcons';
import Platforms from '../../components/platforms/platforms';
import Categories from '../../components/categories/categories';
import Search from '../../components/search/search';
import Icons from '../../components/icons/icons';

import './home.css';

class Home extends Component {

  componentDidMount() {
    const {platform, category, getPlatforms, getCategories, getCategoryIcons} = this.props;
    getPlatforms();
    getCategories(platform);
    getCategoryIcons(platform, category);
  }

  render() {

    const {platforms, categories, icons, isColor} = this.props;

    return (
      <div className="container">
        <div className="panelContainer">
          <div className="topContainer">
            <Search/>
          </div>
          <div className="filtersContainer">
            <div className="platformsContainer">
              <Platforms platforms={platforms}/>
            </div>
            <div className="categoriesContainer">
              <Categories categories={categories}/>
            </div>
          </div>
        </div>
        <div className="contentContainer">
          <div className="iconsContainer">
            <Icons icons={icons}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  platforms: state.platforms,
  platform: state.platform,
  categories: state.categories,
  category: state.category,
  icons: state.icons
});

const mapDispatchToProps = dispatch => ({
  getPlatforms: bindActionCreators(getPlatforms, dispatch),
  getCategories: bindActionCreators(getCategories, dispatch),
  getCategoryIcons: bindActionCreators(getCategoryIcons, dispatch)
});

Home = connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home;
