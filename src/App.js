import React from 'react';
import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import TaskCount from './components/TaskCount';
import TaskList from './components/TaskList';
import CompletedTasks from './components/CompletedTasks';
import Footer from './components/Footer';

class App extends React.Component {

  state = {
    tasks: [
      { id: 1, description: "Walk the dog", completed: false },
      { id: 2, description: "Eat cheese", completed: false },
      { id: 3, description: "Learn the kazoo", completed: false }
    ],

    doneTasks: [
      { id: 4, description: "Read a book", completed: true},
      { id: 5, description: "Play Mario Kart", completed: true}
    ]
  }



  deleteTask = (taskId) => {
    // Tasks will be deleted when this function executes

    // Firstly get the list of tasks from state
    const tasks = this.state.tasks;

    // Next, identify the task that matches the given task Id and remove it
    const updatedTasks = tasks.filter(item => item.id !== taskId);

    // Update the state with the new collection of tasks (IE. Without the one we deleted)
    this.setState({
      tasks: updatedTasks
    });
  }

  completeTasks = (taskId) => {
    const doneList = this.state.doneTasks;

  }



  render() {
    return (
      <div className="container-fluid flex-fill">
        <div className="row">
          <div className="col-12">
            <Header />
            <AddTask />
            <TaskCount TaskCount={this.state.tasks.length} />
            <TaskList taskCollection={this.state.tasks} deleteTaskFunc={this.deleteTask}/>
            <CompletedTasks completeTask={this.state.doneTasks.length} />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
