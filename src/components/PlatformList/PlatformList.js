import React, {Component} from 'react';
import Platform from '../../components/Platform/Platform';

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
              platform={platform.apiCode}/>
          )
        }
      </div>
    );
  }
}

export default Platforms;
