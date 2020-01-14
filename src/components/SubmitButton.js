import React from 'react';

class SubmitButton extends React.Component {

    render() {
      return (
          <div className="col-2">
            <span onclick="newElement()" class="addBtn"></span>
          </div>
      );
    }
  }
  
  export default SubmitButton;