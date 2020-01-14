import React from 'react';

class DoneButton extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <span onclick="newElement()" class="addBtn"></span>
                </div>
            </div>
        );
    }
}

export default DoneButton;