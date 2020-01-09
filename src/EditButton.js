import React from 'react';
import logo from './images/edit.png';

class EditButton extends React.Component {

    render() {
        return (
           <div className="container">
               <div className="row">
                   <div className="edit">
                   <span onclick="newElement()" class="addBtn"><img src={logo} className="edit"></img></span>
                   </div>
               </div>
           </div>
      );
    }
}

export default EditButton;