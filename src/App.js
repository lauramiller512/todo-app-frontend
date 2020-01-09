import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header';
import Container from './Container';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends React.Component {

  render() {
    return (
      <div>
          <Container />
          <Header />
          <AddTask />
      {/*}    <TaskList /> */}
      </div>
    );
  }
}

export default App;
