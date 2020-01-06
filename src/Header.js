import React from 'react';

class Header extends React.Component {

    render() {
      return (
        <div className="topnav">
          <a class="active" href="index.html">HOME</a>
          <a href="calendar.html">Calendar <img src="images/calendar.png" class="calendar" /></a>
          <a href="savedLists.html">Saved Lists</a>
        </div>
      );
    }
  }
  
  export default Header;