import React from 'react';

class CompletedTasks extends React.Component {

  render() {
    return (
        <div className="tasksCompleted">
            <h3>Tasks Completed: {this.props.completeTask}</h3>
        </div>
    );
  }
}

export default CompletedTasks;