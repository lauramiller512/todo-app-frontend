import React from 'react';
import './App.css';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

class App extends React.Component {

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
