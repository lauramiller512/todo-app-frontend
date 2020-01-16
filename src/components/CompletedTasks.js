import React from 'react';

class CompletedTasks extends React.Component {

  render() {
    return (
      /* <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <h3 className="completedTitle">Tasks Completed: </h3>
            <div className="col-6 col-md-6">
              <ul className="tasksCompleted">
                <li>Watch a film</li>
                <li>Call the bank</li>
                <li>Renew driver's license</li>
              </ul>
              </div>
            </div>
          </div>
    </div> */

      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            <ol>
              {doneTasks.map(doneTasks => <li>{doneTasks}</li>)}
            </ol>
          </div>
        </div>
      </div >
    );
  }
}

export default CompletedTasks;