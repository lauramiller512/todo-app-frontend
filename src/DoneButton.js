import React from 'react';

class DoneButton extends React.Component {

    render() {
      return (
          <div className="done">
             <span onclick="newElement()" class="addBtn">Done</span>
          </div>
      );
    }
  }
  
  export default DoneButton;