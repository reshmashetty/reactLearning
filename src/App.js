import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: 'Reshma',
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.name}, Welcome to React!</h1>
        </header>
      </div>
    );
  }
}

export default App;