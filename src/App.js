import React from 'react';
import './App.css';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

class App extends React.Component {

  state = {
    tasks: [
      { id: 1, description: "Walk the dog", completed: false },
      { id: 2, description: "Eat cheese", completed: false },
      { id: 3, description: "Learn the kazoo", completed: false }
    ]
  }

  render() {
    return (
      <div className="container">
          <Header />
          <Body />
          <Footer />
      </div>
    );
  }
}

export default App;
