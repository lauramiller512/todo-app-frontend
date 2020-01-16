import React from "react";

class TaskCount extends React.Component {
  render() {
    return (
      <div className="row taskCountArea">
        <div className="col-12">
            <h1>Tasks Left: {this.props.taskCount}</h1>
        </div>
      </div>
    );
  }
}

export default TaskCount;