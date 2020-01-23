import React from 'react';

class CompletedTasks extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 offset-3">
            <h3 className="completedTitle">Tasks Completed: </h3>
            <div className="col-12">
              <ul className="tasksCompleted">
                <li>Watch a film</li>
                <li>Call the bank</li>
                <li>Renew driver's license</li>
              </ul>
              </div>
            </div>
          </div>
          </div>
    );
  }
}

export default CompletedTasks;