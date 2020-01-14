import React from 'react';
import DoneButton from './DoneButton';
import EditButton from './EditButton';

class TaskList extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div class="input-group-append" className="col-6 taskList">
                        <ul> {/*Put list title here */}
                            <li>Buy Milk</li>
                            <li>Walk the dog</li>
                            <li>Eat cheese</li>
                        </ul>
                        <EditButton /> 
                        <DoneButton />
                    </div>
                </div>
            </div>
      );
    }
}

export default TaskList;