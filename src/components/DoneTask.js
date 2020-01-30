import React from 'react';

class DoneTasks extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 offset-3">
            <h3 className="completedTitle">Tasks Completed: </h3>
            <div className="col-12">
              <ul className="tasksCompleted">
                {/* Add keys to each list item, set up like:
                const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person, i) =>
  // expression goes here:
  <li key={'person_' + i}>{person}</li>;
); */}
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

export default DoneTasks;