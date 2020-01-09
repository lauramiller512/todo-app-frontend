import React from 'react';
import DoneButton from './DoneButton';
import EditButton from './EditButton';

class TaskList extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div class="form-horizontal" className="col-md-6 offset-md-3 taskList">
                        <input type="text" id="myInput" placeholder="Add task..."></input>
                        <EditButton /> 
                        <DoneButton />
                    </div>
                </div>
            </div>
      );
    }
}

export default TaskList;