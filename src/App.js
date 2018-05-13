import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import JobItem from './components/JobListElement';
// import SimpleJobElement from './components/SimpleJobElement';
import jobs from './data/jobs';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">
            Creating a Reusable List Component
          </h1>
        </header>
        <List items={jobs} itemElement={JobItem} />
      </div>
    );
  }
}

export default App;
