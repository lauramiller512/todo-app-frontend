import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header';
import Container from './Container';
import AddTask from './AddTask';

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <Container />
          <div className="row">
            <div col-12>
              <Header />
          <div className="row">
            <div col-6></div>
            <div col-6>
              <AddTask />
            </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
