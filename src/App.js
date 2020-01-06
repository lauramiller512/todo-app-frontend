import React from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './Header';
import Container from './Container';

class App extends React.Component {

  render() {
    return (
      <div className="container">
        <Container />
          <div className="row">
          <div className="col-12">
            <Header />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
