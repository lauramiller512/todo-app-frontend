import React from 'react';
import AddTask from '../components/AddTask';
import TaskList from '../components/TaskList';

class Body extends React.Component {

    render() {
        return (
            <div className="body col-8 offset-2">
                <AddTask />
                <TaskList />
            </div>
        );
    }
}

export default Body;

