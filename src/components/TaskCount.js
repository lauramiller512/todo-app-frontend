import React from "react";

class TaskCount extends React.Component {
  render() {
    return (
      <div className="row taskCountArea">
        <div className="col-12">
            <h2>"If it weren't for the last minute, nothing would get done.” ― Rita Mae Brown </h2>
            <h3>Tasks left: {this.props.taskCount}</h3>
        </div>
      </div>
    );
  }
}

export default TaskCount;