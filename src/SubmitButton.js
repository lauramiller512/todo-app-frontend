import React from 'react';

class SubmitButton extends React.Component {

    render() {
      return (
          <div className="submit">
            <span onclick="newElement()" class="addBtn">Submit</span>
          </div>
      );
    }
  }
  
  export default SubmitButton;