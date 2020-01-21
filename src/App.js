import React from 'react';
import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import TaskCount from './components/TaskCount';
import TaskList from './components/TaskList';
import CompletedTasks from './components/CompletedTasks';
import Footer from './components/Footer';
import uuidv4 from 'uuid/v4';

class App extends React.Component {

  state = {
    tasks: [
      { id: uuidv4(), description: "Walk the dog", completed: false },
      { id: uuidv4(), description: "Eat cheese", completed: false },
      { id: uuidv4(), description: "Learn the kazoo", completed: false }
    ],

    doneTasks: [
      { id: uuidv4(), description: "Read a book", completed: true},
      { id: uuidv4(), description: "Play Mario Kart", completed: true}
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

  addTask = (taskDescription) => {

    //Defining the task that we're adding
    const taskToAdd = { id: uuidv4(), description: taskDescription, compled: false};

    console.log("Adding a task");
    console.log("taskToAdd");

    // Pulling the current array list of tasks from state
    const currentTasks = this.state.tasks;

    // Pushing the added task into the array
    currentTasks.push(taskToAdd);
    // Updates the state (up above)
    this.setState({
      tasks: currentTasks
    });
  }


  render() {
    return (
      <div className="container-fluid flex-fill">
        <div className="row">
          <div className="col-12">
            <Header />
            <AddTask addTaskFunc={this.addTask}/>
            <TaskCount taskCount={this.state.tasks.length} />
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
