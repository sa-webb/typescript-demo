import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Hello from './components/Hello';

class App extends Component {
  render() {
    return (
      <Hello name="Typescript" enthusiamLevel={12}/>
    );
  }
}

export default App;
