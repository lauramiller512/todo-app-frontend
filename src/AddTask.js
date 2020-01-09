import React from 'react';
import SubmitButton from './SubmitButton';
import EditButton from './EditButton';

class AddTask extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div class="input-group-append" className="col-md-6 addTask">
                        <input type="text" id="myInput" placeholder="Add task..."></input>
                        <div className="col-3">
                            <SubmitButton />
                        </div>
                        <div className="col-3">
                            <EditButton />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddTask;