import React from 'react';
import logo from './images/web-design-2906159_1920.jpg';

class Container extends React.Component {

    render() {
      return (
            <div className="container">
                <img src={logo} />
            </div>
        );
    }
  }
  
  export default Container;