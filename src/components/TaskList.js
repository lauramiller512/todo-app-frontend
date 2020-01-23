import React from 'react';
import Task from "./Task";

class TaskList extends React.Component {

    render() {
        return (
            <div className="col-6 offset-3">
                {this.props.taskCollection.map(taskItem => (
                    <Task
                        key={taskItem.id}
                        item={taskItem}
                        deleteTaskFunc={this.props.deleteTaskFunc}
                        completedTaskFunc={this.props.completedTaskFunc}
                    />
                ))}
            </div>
        );
    }
}

export default TaskList;