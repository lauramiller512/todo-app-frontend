import React from 'react';

class AddTask extends React.Component {

    state = {
        taskDescription: "Enter your task..."
    }

    addTask = () => {
        this.props.addTaskFunc(this.state.taskDescription);
    }

    taskDescriptionChanged = (event) => {
        this.setState({
            taskDescription: event.target.value
        });
    }

    render() {
        return (
            <div className="container addtask">
                <div className="row">
                    <div className="col-5 offset-4">
                        <h1>Add your task to the list here: </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-5 offset-4">
                        <div className="input-group mb-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Task to add...."
                                onChange={this.taskDescriptionChanged}
                            />
                            <div className="input-group-append">
                                <button className="btn addButton btn-outline-primary" type="button" onClick={this.addTask}>
                                    Add
              </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddTask;