import React from 'react';
import SubmitButton from './SubmitButton';

class AddTask extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-12">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Task to add...."
                        />
                        <div className="input-group-append">
                            <button className="btn btn-outline-primary" type="button">
                                Add
              </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddTask;