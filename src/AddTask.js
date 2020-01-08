import React from 'react';
import DoneButton from './DoneButton';
import SubmitButton from './SubmitButton';

class AddTask extends React.Component {

    render() {
      return (
        <div className="col-12 addTask">
                <input type="text" id="myInput" placeholder="Add task..."></input>
                <SubmitButton />
        </div>
      );
    }
  }
  
  export default AddTask;