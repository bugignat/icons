import React, {Component} from 'react';
import Category from '../../components/category/category';

class Categories extends Component {
  render() {
    const {categories} = this.props;
    return (
      <div>
        {
          categories.map((category, index) =>
            <Category
              key={index}
              title={category.name}
              category={category.api_code}/>
          )
        }
      </div>
    );
  }
}

export default Categories;
