import React from 'react';
import logo from './images/edit.png';

class EditButton extends React.Component {

    render() {
        return (
           <div className="container">
               <div className="row">
                        <span onclick="newElement()" class="addBtn" className="edit"><img src={logo}></img></span>
               </div>
           </div>
      );
    }
}

export default EditButton;