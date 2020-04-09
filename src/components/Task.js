import React from "react";

class Task extends React.Component {

    deleteClicked = () => {
        this.props.deleteTaskFunc(this.props.item.id);
    };

    doneClicked = () => {
        this.props.completedTaskFunc(this.props.item.id);
    };



    render() {
        let description;

        if (this.props.item.status) {
            description = (
                <div className="col-12 col-md-8 taskToDo">
                    {this.props.item.taskDescription}
                </div>
            );
        } else {
            description = (
                <div className="col-12 col-md-8">{this.props.item.taskDescription}</div>
            );
        }

        return (
            <div className="row taskRow">
                {description}
                <div className="col-6 col-md-2">
                        <button type="button" className="btn btn-success" onClick={this.doneClicked}>
                            Finished!
                       </button>
                </div>
                <div className="col-6 col-md-2">
                    <button type="button" className="btn btn-danger" onClick={this.deleteClicked}>
                        Delete
                    </button>
                </div>
            </div>
        );
    }
}

export default Task;