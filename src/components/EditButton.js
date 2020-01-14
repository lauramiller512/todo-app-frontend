import React from 'react';

class EditButton extends React.Component {

    render() {
        return (
           <div className="container">
                <span onclick="newElement()" class="addBtn" className="edit"></span>
           </div>
      );
    }
}

export default EditButton;