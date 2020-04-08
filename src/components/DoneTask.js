import React from 'react';

class DoneTasks extends React.Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-6 offset-3">
            <h3 className="completedTitle">Tasks Completed: </h3>
         
                {/* Add keys to each list item, set up like:
                const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person, i) =>
  // expression goes here:
  <li key={'person_' + i}>{person}</li>;
); */}
              
           
            </div>
          </div>
          </div>
    );
  }
}

export default DoneTasks;