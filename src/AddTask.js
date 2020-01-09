import React from 'react';
import SubmitButton from './SubmitButton';

class AddTask extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">

                    </div>
                </div>
                <div className="row">
                    <div className="col-12 addTask">
                        <input type="text" id="myInput" placeholder="Add task..."></input>
                        <SubmitButton />
                    </div>
                </div>
            </div>
      );
    }
}

export default AddTask;