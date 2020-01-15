import React from 'react';

class CompletedTasks extends React.Component {

  render() {
    return (
        <div className="tasksCompleted">
            <h3>Tasks Completed: </h3>
            <ul>
                <li>Watch a film</li>
                <li>Call the bank</li>
                <li>Renew driver's license</li>
            </ul>
        </div>
    );
  }
}

export default CompletedTasks;