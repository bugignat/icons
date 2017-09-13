import React, {Component} from 'react';
import Platform from '../../components/platform/platform';

class Platforms extends Component {
  render() {
    const {platforms} = this.props;
    return (
      <div>
        {
          platforms.map((platform, index) =>
            <Platform
              key={index}
              title={platform.title}
              size={platform.size}
              platform={platform.apiCode}/>
          )
        }
      </div>
    );
  }
}

export default Platforms;
