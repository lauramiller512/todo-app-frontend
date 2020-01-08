import React from 'react';
import logo from './images/calendar.png';

class Header extends React.Component {

    render() {
      return (
        <div className="topnav">
          <a class="active" href="index.html">HOME</a>
          <a href="calendar.html">Calendar <img src={logo} class="calendar" /></a>
          <a href="savedLists.html">Saved Lists</a>
        </div>
      );
    }
  }
  
  export default Header;