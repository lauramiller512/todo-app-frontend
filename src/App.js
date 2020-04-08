import React from 'react';
import './App.css';
import Header from './components/Header';
import AddTask from './components/AddTask';
import TaskCount from './components/TaskCount';
import TaskList from './components/TaskList';
import DoneTask from './components/DoneTask';
import Footer from './components/Footer';
import axios from 'axios';

class App extends React.Component {
  state = {
    tasks: []
  };

  // Need to establish an event that calls the tasks from our DB
  // This is a lifecycle method
  componentDidMount = () => {
    // Fetch tasks from API
    axios.get('https://7whki9pqp2.execute-api.eu-west-2.amazonaws.com/dev/tasks')
      .then((response) => {
        // handle success
        this.setState({
          tasks: response.data.tasks
        })
      })
     
      .catch(function (error) {
        // handle failure
        console.error(error);
      })
  };

  deleteTask = (id) => {
    // Tasks will be deleted when this function executes

    axios
      .delete(
        `https://7whki9pqp2.execute-api.eu-west-2.amazonaws.com/dev/tasks/${id}`
      )
      .then(response => {
        // Next, identify the task that matches the given task Id and remove it
        const updatedTasks = this.state.tasks.filter(item => item.id !== id);

        // Update the state with the new collection of tasks (ie. without the one we deleted)
        this.setState({
          tasks: updatedTasks
        });
      })
      .catch(error => {
        // handle error
        console.error(error);
      });
  };

  completeTask = (taskId) => {
    // Firstly find the task that needs to be updated
    const tasksBeingUpdated = this.state.tasks; // Array of tasks
    for (let i = 0; i < tasksBeingUpdated.length; i++) {
      const task = tasksBeingUpdated[i];

      if (task.id === taskId) {
        // We need to update a property on the identified task
        task.completed = true;
        break;
      }
    }

    // Update state to reflect the changes made to the task
    this.setState({
      tasks: tasksBeingUpdated
    });
  };

  addTask = taskDescription => {
    const taskToAdd = {
    taskDescription: taskDescription,
    userId: '1'
    }

  axios.post(
      "https://7whki9pqp2.execute-api.eu-west-2.amazonaws.com/dev/tasks",
      taskToAdd
    )
    .then(response => {
      taskToAdd.taskId = response.data.task.id;

      // Get the current list of tasks from state
      const currentTasks = this.state.tasks;
      // add the 'taskToAdd' to the array of tasks in state
      currentTasks.push(taskToAdd);

      // update the state
      this.setState({
        tasks: currentTasks
      });
    })
    .catch(error => {
      // handle error
      console.error(error);
    });

  };


  render() {
    return (
      <div className="container-fluid flex-fill">
        <div className="row">
          <div className="col-12">
            <Header />
            <AddTask addTaskFunc={this.addTask} />
            <TaskCount taskCount={this.state.tasks.length} />
            <TaskList
              taskCollection={this.state.tasks}
              deleteTaskFunc={this.deleteTask}
              completedTaskFunc={this.completeTask}
            />
            <DoneTask />
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
