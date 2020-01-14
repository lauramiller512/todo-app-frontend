import React from 'react';

class TaskList extends React.Component {

    render() {
        return (
            <div>
                {
                    this.props.taskCollection.map(
                        (taskItem) => <Task item={taskItem} deleteTaskFunc={this.props.deleteTaskFunc} />
                    )
                }
            </div>
        );
    }
}

export default TaskList;