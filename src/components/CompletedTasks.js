import React from 'react';

class CompletedTasks extends React.Component {

  render() {
    return (
        <div>
        {
            this.props.completeTask.map(
                (taskItem) => <Task item={taskItem} />
            )
        }
    </div>
    );
  }
}

export default CompletedTasks;