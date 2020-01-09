import React from 'react';
import logo from './images/checked.png';


class DoneButton extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <span onclick="newElement()" class="addBtn"><img src={logo} className="done"></img></span>
                </div>
            </div>
        );
    }
}

export default DoneButton;