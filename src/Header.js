import React from 'react';
import logo from './images/home.png';

class Header extends React.Component {

    render() {
      return (
        <div className="topnav">
          <a class="active" href="index.html"><img src={logo}></img></a>
        </div>
      );
    }
  }
  
  export default Header;