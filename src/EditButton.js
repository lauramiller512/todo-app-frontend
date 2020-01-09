import React from 'react';
import logo from './images/edit.png';

class EditButton extends React.Component {

    render() {
        return (
           <div className="container">
                <span onclick="newElement()" class="addBtn" className="edit"><img src={logo}></img></span>
           </div>
      );
    }
}

export default EditButton;