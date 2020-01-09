import React from 'react';
import DoneButton from './DoneButton';
import EditButton from './EditButton';

class TaskList extends React.Component {

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
                        <EditButton />
                        <DoneButton />
                    </div>
                </div>
            </div>
      );
    }
}

export default TaskList;