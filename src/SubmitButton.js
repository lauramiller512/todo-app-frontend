import React from 'react';
import logo from './images/plus.png';

class SubmitButton extends React.Component {

    render() {
      return (
          <div className="col-2">
            <span onclick="newElement()" class="addBtn"><img src={logo} className="plus"></img></span>
          </div>
      );
    }
  }
  
  export default SubmitButton;