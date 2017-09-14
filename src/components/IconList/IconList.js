import React, {Component} from 'react';
import {connect} from 'react-redux';
import MDSpinner from 'react-md-spinner';
import Icon from '../Icon/Icon';

import './IconList.css';

class Icons extends Component {

  render() {
    const {fetchingIcons, icons} = this.props;
    return (
      <div>
        {
          fetchingIcons
            ? <div className="preloader">
              <MDSpinner
                singleColor={'#2979FF'}
                size={28}/>
            </div>
            : icons.map((subcategory, index) =>
              <div key={index}>
                <div className="subCategory">{subcategory.subcategory_name}</div>
                {
                  subcategory.icons.map((icon, index) =>
                    <Icon
                      key={index}
                      icon={icon}
                      delay={index}/>
                  )
                }
              </div>
            )
        }
        {
          !fetchingIcons && icons.length > 0 && icons[0].icons.length < 1
            ? <div className="empty"/>
            : null
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fetchingIcons: state.fetchingIcons,
  size: state.size
});

Icons = connect(mapStateToProps)(Icons);

export default Icons;
